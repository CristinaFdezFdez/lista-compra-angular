import { Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/shopping-list', pathMatch: 'full' },
    { path: 'shopping-list', component: ShoppingListComponent }
];
