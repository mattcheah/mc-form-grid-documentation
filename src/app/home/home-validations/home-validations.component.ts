import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-validations',
  templateUrl: './home-validations.component.html',
  styleUrls: ['./home-validations.component.scss']
})
export class HomeValidationsComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    // Must be a non-zero number
    number: new FormControl('', [
      (control: AbstractControl) => {
        if((control.value as string).match(/[^0-9]/g)) {
          return {'notANumber': true};
        } else if ((control.value as string).match(/0/)) {
          return {'hasZero': true};
        }
        return null;
      }
    ]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}
