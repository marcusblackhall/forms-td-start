import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultQuestion: string = "pet";
  answer: string = "";
  genders: string[] = ["male", "female"];

  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''


  };

  submitted: boolean = false;

  @ViewChild('f') signupForm: NgForm

  suggestUserName() {
    console.log("assigning default values");
    const suggestedName = 'Superuser';
    // this.signupForm.setValue(
    //   {
    //     userData: {
    //       username: 'Marcus',
    //       email: 'something@google.nl'
    //     },
    //     secret : 'pet',
    //     questionAnswer: '',
    //     gender: 'male'

    //   }

    // );
    this.signupForm.form.patchValue(
        {
          userData: {
            username: "Marcus"
          }
        }

    );
  }

  // onSubmit(form: NgForm){

  // console.log("email is " + form.value.email);
  // }

  onSubmit() {
    console.log(this.signupForm);

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.submitted = true;
  }
}
