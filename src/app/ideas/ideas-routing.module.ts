import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../auth/login/login.component";
import {RegistrationComponent} from "../auth/registration/registration.component";
import {ListIdeasComponent} from "./list-ideas/list-ideas.component";
import {NewIdeaComponent} from "./new-idea/new-idea.component";

const routes: Routes = [
  {
    path: '',
    component: ListIdeasComponent
  },
  {
    path: 'new',
    component: NewIdeaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeasRoutingModule { }
