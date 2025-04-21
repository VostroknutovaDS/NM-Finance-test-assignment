import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  addItem(item: string) {}

  addFavorite(item: string) {}

  getTodoList() {}

  getTodayTodoList() {}

  getFavorites() {}
}
