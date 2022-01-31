import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private message: NzMessageService, private router: Router) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]]
    });
  }

  submitForm(): void {
    const { email, password } = this.validateForm.value;

    this.authService
      .register(email, password)
      .then(() => {
        this.router.navigate(['home']);
        this.createMessage('success', 'Register completed!');
      })
      .catch(response => {
        const { message } = response;
        this.createMessage('error', message);
      });
  }

  createMessage(type: string, message: string): void {
    this.message.create(type, message);
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
