import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/core/guards';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [SharedModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    declarations: [HomeComponent],
    exports: [RouterModule],
})
export class HomeModule {}
