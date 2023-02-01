import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// Home Component Class
export class HomeComponent {

  // constructor of the HomeComponent Class
  constructor(
    private router: Router,
    private userService: UserService
  ){

  }

  // login button click function
  // This method will hide Register Component and Show Login Component
  clickLogin(){
    let logincomp = document.getElementById("TAG_Login") as HTMLDivElement;
    let regcomp = document.getElementById("TAG_Register") as HTMLDivElement;
    regcomp.style.display="none";
    logincomp.style.display="block";
  }

  // Sign up button click function
  // This method will hide Login Component and Show Register Component
  clickSignUp(){
    let logincomp = document.getElementById("TAG_Login") as HTMLDivElement;
    let regcomp = document.getElementById("TAG_Register") as HTMLDivElement;
    regcomp.style.display= "block";
    logincomp.style.display= "none";
    
  }

  login(user: User) {
    this.userService.Login(user)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['/home-dynamic']);
          },
        error: (error: any) => {
          alert("Failed to login");
          console.error(error);
        }
      });
  }

}
