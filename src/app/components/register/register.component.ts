import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  @Input()
  initialState: BehaviorSubject<User> = new BehaviorSubject({});
  
  @Output()
  formValuesChanged = new EventEmitter<User>();
  
  @Output()
  formSubmitted = new EventEmitter<User>();
  
  regForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }
  
  get fname(){return this.regForm.get('fname')!;}
  get lname(){return this.regForm.get('lname')!;}
  get pno(){return this.regForm.get('pno')!;}
  get email(){return this.regForm.get('email')!;}
  get dob(){return this.regForm.get('dob')!;}
  get gender(){return this.regForm.get('gender')!;}
  get type(){return this.regForm.get('type')!;}
  get pw(){return this.regForm.get('pw')!;}

  ngOnInit() {
    this.initialState.subscribe(user => {
      this.regForm = this.fb.group({
        fname:[ user.fname, [ Validators.required ] ],
        lname:[ user.lname, [ Validators.required ] ],
        pno:[ user.pno, [ Validators.required ] ],
        email:[ user.email, [ Validators.required ] ],
        dob:[ user.dob, [ Validators.required ] ],
        gender:[ user.gender, [ Validators.required ] ],
        type:[ user.type, [ Validators.required ] ],
        pw:[ user.pw, [ Validators.required ] ]
      });
    });
  
    this.regForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  submitForm() {
    this.formSubmitted.emit(this.regForm.value);
  }

}
