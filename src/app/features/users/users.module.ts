import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { usersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    UsersComponent,
    DetailUserComponent,
  ],
  imports: [
    CommonModule,
    usersRoutingModule
  ]
})

export class UsersModule { }
