import { Component, inject } from '@angular/core';
import { AddItemComponent } from '../../widgets/add-item/components/add-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item-page',
  template: `<app-add-item (newItemAdded)="redirectToList()"></app-add-item>`,
  styles: [],
  standalone: true,
  imports: [AddItemComponent],
})
export class AddItemPageComponent {
  private router = inject(Router);

  redirectToList() {
    this.router.navigate(['/list']);
  }
}
