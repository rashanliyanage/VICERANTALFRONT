import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AdminLayoutRoutingModule} from './admin-layout.routing.module';
import {AdminLayoutComponent} from './admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import {SideBarComponent} from './side-bar/side-bar.component';
import  {NavBarComponent} from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SubjectComponent} from '../admin-layout/components/subject/subject.component';
import {NewLessionComponent} from './components/new-lession/new-lession.component';

@NgModule({
    imports: [
			CommonModule, AdminLayoutRoutingModule,RouterModule,HttpClientModule,FormsModule
    ],
    declarations: [
      AdminLayoutComponent,
      DashboardComponent,
      SideBarComponent,
      NavBarComponent,
      SubjectComponent,
      NewLessionComponent
		]
})
export class AdminLayoutModule {}
