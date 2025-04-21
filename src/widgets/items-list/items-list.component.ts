import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatePipe, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Task } from '../../entities/task.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styles: [],
  imports: [
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    DatePipe,
    MatIconModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class ItemsListComponent {
  displayedColumns = ['task', 'createdAt', 'timeLeft', 'favorite', 'delete'];
  title = input<string>();
  todos = input.required<Task[]>();

  toggleFavorite(index: number) {}

  deleteTodo(index: number) {}

  toggleDone(index: number) {}
}
