import { NgModule } from '@angular/core';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Pages
import { AuthModule } from './pages/auth/auth.module';
import { HomeModule } from './pages/home/home.module';

// App + layout components
import { AppComponent } from './app.component';

@NgModule({
    imports: [CoreModule, SharedModule, AuthModule, HomeModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
