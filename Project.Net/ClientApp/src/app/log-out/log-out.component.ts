import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../core/services/security.models';
import { SecurityService } from '../core/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

    public loginModel: LoginModel = <LoginModel>{};

    constructor(private securityService: SecurityService, private router: Router) {
    }

    ngOnInit() {
    }

    logoutUser() {
        this.router.navigate(['/login']);
        this.securityService.logout();
    }

}
