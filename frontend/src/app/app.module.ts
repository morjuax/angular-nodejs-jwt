import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SingupComponent } from "./components/singup/singup.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { PrivateTasksComponent } from "./components/private-tasks/private-tasks.component";
import { NavegationComponent } from "./components/navegation/navegation.component";
import { TokenInterceptorService } from "./services/token-interceptor.service";

import { AuthGuard } from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SigninComponent,
    SignupComponent,
    TasksComponent,
    PrivateTasksComponent,
    NavegationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
