import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { ProductItemComponent } from './product-item/product-item.component';

import {ShareButtonsModule} from 'ngx-sharebuttons/buttons'
import {ShareIconsModule} from 'ngx-sharebuttons/icons';
import { SkincareComponent } from './skincare/skincare.component';
import { HaircareComponent } from './haircare/haircare.component';
import { PerfumeComponent } from './perfume/perfume.component';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';
import { LikeComponent } from './like/like.component';
import { DeleteComponent } from './delete/delete.component';


const appRoutes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'skincare', component: SkincareComponent},
  {path: 'haircare', component: HaircareComponent},
  {path: 'perfume', component: PerfumeComponent},
  {path: 'cosmetics', component: CosmeticsComponent}
]
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ShareButtonsModule.withConfig({
    debug:true,
    }),
    ShareIconsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ProductItemComponent,
    SkincareComponent,
    HaircareComponent,
    PerfumeComponent,
    CosmeticsComponent,
    LikeComponent,
    DeleteComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/