import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AddItemFormBuilderService {
  constructor(private formBuilder: FormBuilder) {}

  buildForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      expirationDate: [null, Validators.required],
      expirationTime: [''],
    });
  }
}
