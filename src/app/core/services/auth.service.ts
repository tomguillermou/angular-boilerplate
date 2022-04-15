import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { TokenService } from './token.service';

interface LoginRequestBody {
    email: string;
    password: string;
}

interface RegisterRequestBody {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    position: string;
}

interface AuthResponseBody {
    token: string;
}

@Injectable()
export class AuthenticationService {
    constructor(private _apiService: ApiService, private _tokenService: TokenService) {}

    public login(requestBody: LoginRequestBody) {
        return this._apiService.post<AuthResponseBody>('/auth/login', requestBody).pipe(
            map((responseBody) => {
                this._tokenService.setToken(responseBody.token);
                return responseBody;
            })
        );
    }

    public register(requestBody: RegisterRequestBody) {
        return this._apiService.post<AuthResponseBody>('/auth/register', requestBody).pipe(
            map((responseBody) => {
                this._tokenService.setToken(responseBody.token);
                return responseBody;
            })
        );
    }

    public logout(): void {
        this._tokenService.removeToken();
    }

    public async isLoggedIn(): Promise<boolean> {
        // Improve by making call to API to check token authenticity
        return typeof this._tokenService.getToken() === 'string';
    }
}
