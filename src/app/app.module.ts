import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Routes } from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserProfileComponent,
    SignUpComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(Routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
