import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// components
import { TasksComponent } from "./components/tasks/tasks.component";
import { PrivateTasksComponent } from "./components/private-tasks/private-tasks.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
