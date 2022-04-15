import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
    private _tokenKey = 'JWT';

    public setToken(token: string): void {
        localStorage.setItem(this._tokenKey, token);
    }

    public getToken(): string | null {
        return localStorage.getItem(this._tokenKey);
    }
    public removeToken(): void {
        localStorage.removeItem(this._tokenKey);
    }
}
