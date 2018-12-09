import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $;
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    $(document).ready( function () {
      $('#subject_table').DataTable({
        "paging":   false,
        "ordering": false,
        "info":     false
    } );
  } );
  }

  navigateNewLession() {
     this.router.navigate(['admin/add-newLession', 1 ] );
  }

}
