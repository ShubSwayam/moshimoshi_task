import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { first } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private dialog: MatDialog,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.use_login(this.loginForm.value).pipe(first()).subscribe((data: any) => {
      this.snackBar.open(data.message, 'Ok', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      })
      localStorage.setItem("loginData", JSON.stringify(data.user))
      // this.router.navigate(['home'])
    },
      err => {
        this.snackBar.open(err.error.message, 'Ok', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        })
      }
    )
  }

}
