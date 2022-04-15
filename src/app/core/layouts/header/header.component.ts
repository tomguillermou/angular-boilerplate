import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'app/core/services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    public showHeader = false;

    constructor(private _router: Router, private _authService: AuthenticationService) {}

    async ngOnInit(): Promise<void> {
        this.showHeader = await this._authService.isLoggedIn();
        console.log('⚡️ ~ this.showHeader', this.showHeader);
    }

    onLogout(): void {
        this._authService.logout();
        this._router.navigateByUrl('/login');
    }
}
