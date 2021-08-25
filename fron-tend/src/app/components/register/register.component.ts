import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { first } from "rxjs/operators";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
import { LoginService } from "../../services/login.service";
import { DOCUMENT } from "@angular/common";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  Roles: any = ['Admin', 'Author', 'Reader'];

  registerform = new FormGroup({
    user_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.add_users(this.registerform.value).pipe(first()).subscribe((data: any) => {
      console.log("Checking When Add data", data);
      this.snackBar.open(data.message, 'Ok', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      })
    },
      err => {
        this.snackBar.open(err.error.message, 'Ok', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        })
        console.log("having some error", err.error);
      }
    )
  }

}