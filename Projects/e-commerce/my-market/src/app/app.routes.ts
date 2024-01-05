import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: ProductComponent }, // For individual product view
    { path: 'cart', component: CartComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' } // Redirect to home for unmatched routes

];
