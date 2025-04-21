import { Component } from '@angular/core';
import { ItemsListComponent } from '../../widgets/items-list/items-list.component';
import { todos } from '../../shared/mocked-data';

@Component({
  selector: 'app-items-list-page',
  template: `<app-items-list title="Today TODO's" [todos]="todos"></app-items-list>
    <app-items-list title="My TODO List" [todos]="todos"></app-items-list>`,
  imports: [ItemsListComponent],
  styles: [],
  standalone: true,
})
export class ItemsListPageComponent {
  todos = todos;
}
