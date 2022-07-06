import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

defaultQuestion:string = "pet";
answer: string = "";
genders:string[] = ["male","female"];

@ViewChild('f') signupForm:NgForm

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm){

  // console.log("email is " + form.value.email);
  // }

  onSubmit(){
console.log(this.signupForm);
  }
}
