
import { Component, OnInit } from '@angular/core';
import {DashboardService} from './dashbord-service';

declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

    ngOnInit(){
      $('#myTable').DataTable( {
        "paging":   true,
        "ordering": true,
        "info":     true
    } );
    }
}
