import { Routes } from '@angular/router';
import { AddItemPageComponent } from '../pages/add-item/add-item-page.component';
import { ItemsListPageComponent } from '../pages/items-list/items-list-page.component';

const URLS = {
  add: 'add',
  list: 'list',
  favorite: 'favorite',
};

export const routes: Routes = [
  { path: '', redirectTo: URLS.list, pathMatch: 'full' },
  { path: URLS.add, component: AddItemPageComponent },
  { path: URLS.list, component: ItemsListPageComponent },
  { path: URLS.favorite, component: ItemsListPageComponent },
];
