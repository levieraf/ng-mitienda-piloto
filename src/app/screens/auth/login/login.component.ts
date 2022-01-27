import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    const { email, password } = this.validateForm.value;

    this.authService
      .login(email, password)
      .then(response => {
        console.info(response);
      })
      .catch(response => {
        const { message } = response;
        this.createMessage('error', message);
      });
  }

  createMessage(type: string, message: string): void {
    this.message.create(type, message);
  }
}
