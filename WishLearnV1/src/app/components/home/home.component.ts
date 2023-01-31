import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// Home Component Class
export class HomeComponent {

  // constructor of the HomeComponent Class
  constructor(){

  }

  // login button click function
  // This method will hide Register Component and Show Login Component
  clickLogin(){
    let logincomp = document.getElementById("TAG_Login") as HTMLDivElement;;
    let regcomp = document.getElementById("TAG_Register") as HTMLDivElement;;
    regcomp.style.display="none";
    logincomp.style.display="block";
  }

  // Sign up button click function
  // This method will hide Login Component and Show Register Component
  clickSignUp(){
    let logincomp = document.getElementById("TAG_Login") as HTMLDivElement;;
    let regcomp = document.getElementById("TAG_Register") as HTMLDivElement;;
    regcomp.style.display= "block";
    logincomp.style.display= "none";
    
  }

}
