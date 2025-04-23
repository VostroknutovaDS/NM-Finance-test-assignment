import { Component, DestroyRef, output, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AddItemFormBuilderService } from '../services/add-item-form-builder.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoreService } from '../../../shared/store.service';
import { Location } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AddItemComponent {
  form: FormGroup;
  titleControl: FormControl;
  expirationDateControl: FormControl;
  expirationTimeControl: FormControl;
  titleError = signal('');
  expirationDateError = signal('');

  newItemAdded = output<void>();

  constructor(
    private _addItemFormBuilderService: AddItemFormBuilderService,
    private _storeService: StoreService,
    private _location: Location,
    private _destroyRef: DestroyRef
  ) {
    this.form = this._addItemFormBuilderService.buildForm();
    this.titleControl = this.form.get('title') as FormControl;
    this.expirationDateControl = this.form.get('expirationDate') as FormControl;
    this.expirationTimeControl = this.form.get('expirationTime') as FormControl;

    this.subscribeToFormValidation();
  }

  goBack() {
    // TODO: potential problem, if user came via direct link they will be redirected to the previous page outside of our application
    this._location.back();
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.checkTitleError();
      this.checkExpirationDateError();
      return;
    }

    this._storeService.addItem(this.form.value);
    this.newItemAdded.emit();
  }

  private subscribeToFormValidation() {
    merge(this.titleControl.statusChanges, this.titleControl.valueChanges)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => this.checkTitleError());

    this.expirationDateControl.statusChanges
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => this.checkExpirationDateError());
  }

  private checkTitleError() {
    if (this.titleControl.hasError('required')) {
      this.titleError.set('You must enter a value');
    } else if (this.titleControl.hasError('maxlength')) {
      this.titleError.set('Title must be at most 100 characters long');
    } else {
      this.titleError.set('');
    }
  }

  private checkExpirationDateError() {
    if (this.expirationDateControl.hasError('required')) {
      this.expirationDateError.set('You must enter a value');
    } else {
      this.expirationDateError.set('');
    }
  }
}
