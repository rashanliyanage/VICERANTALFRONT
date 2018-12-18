import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SubjectService} from '../../../services/subject.service'
import { from } from 'rxjs';
declare var $;
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
  providers:[SubjectService]
})
export class SubjectComponent implements OnInit {

  constructor(private router:Router,private subjectService:SubjectService) { }

  ngOnInit() {
    $(document).ready( function () {
      $('#subject_table').DataTable({
        "paging":   true,
        "ordering": false,
        "info":     false
    } );
  } );
  this.getAllSubject();
  }

  navigateNewLession() {
     this.router.navigate(['admin/add-newLession', 1 ] );
  }

  getAllSubject(){
    this.subjectService.getAllSubjects()
    .then(response=>{
     console.log(response);
    })
    .catch(error=>{

    });
  }

}
