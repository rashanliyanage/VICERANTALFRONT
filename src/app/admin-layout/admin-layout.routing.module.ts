// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from './admin-layout.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SubjectComponent} from '../admin-layout/components/subject/subject.component';
import {NewLessionComponent} from './components/new-lession/new-lession.component'



const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
             { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
             { path: 'dashboard', component: DashboardComponent},
             { path: 'subject', component: SubjectComponent},
             { path: 'add-newLession/:id', component: NewLessionComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule {}
