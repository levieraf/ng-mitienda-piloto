import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private message: NzMessageService, private router: Router) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    const { email, password } = this.validateForm.value;

    this.loading = true;
    this.authService
      .login(email, password)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/']);
      })
      .catch(response => {
        this.loading = false;
        const { message } = response;
        this.createMessage('error', message);
      })
  }

  createMessage(type: string, message: string): void {
    this.message.create(type, message);
  }
}
