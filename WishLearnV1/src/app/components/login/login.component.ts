import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  @Input()
  initialState: BehaviorSubject<User> = new BehaviorSubject({});
  
  @Output()
  formValuesChanged = new EventEmitter<User>();
  
  @Output()
  formSubmitted = new EventEmitter<User>();
  
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }
  
    get email() { return this.loginForm.get('email')!; }
  get pw() { return this.loginForm.get('pw')!; }

  ngOnInit() {
    this.initialState.subscribe(user => {
      this.loginForm = this.fb.group({
        email: [ user.email, [Validators.required] ],
        pw: [ user.pw, [ Validators.required, Validators.minLength(5) ] ]
      });
    });
  
    this.loginForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }
  
  submitForm() {
    this.formSubmitted.emit(this.loginForm.value);
  }

}
