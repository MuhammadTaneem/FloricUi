import { CartResolver } from './cart.resolver';
import { CartComponent } from './cart/cart.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full'
  },
  {
  path: 'cart',
  component: CartComponent,
  canActivate: [AuthGuard],
  resolve: {
      data: CartResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
