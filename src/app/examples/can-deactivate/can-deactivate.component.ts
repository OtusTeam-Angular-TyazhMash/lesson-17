import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.component.html',
  styleUrls: ['./can-deactivate.component.css'],
})
export class CanDeactivateComponent implements OnInit {
  userForm: FormGroup = this.fs.group({
    firstName: this.fs.control('', [Validators.required]),
    lastName: this.fs.control(''),
  });
  isFormSaved = false;

  private confirmDialog = new Subject<boolean>();
  openConfirmDialog = false;

  constructor(private readonly fs: FormBuilder) {}

  ngOnInit() {}

  isAllowedToleave() {
    return (
      (this.isFormSaved && this.userForm.valid) ||
      !this.userForm.touched ||
      this.userForm.pristine
    );
  }

  confirm() {
    this.openConfirmDialog = true;
    return this.confirmDialog.asObservable();
  }

  onConfirmClick() {
    this.openConfirmDialog = false;
    this.confirmDialog.next(true);
  }

  onCancelClick() {
    this.openConfirmDialog = false;
    this.confirmDialog.next(false);
  }
}
