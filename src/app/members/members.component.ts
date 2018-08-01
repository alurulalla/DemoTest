import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  name: any;
  state: string = '';

   highTask  = [];
  mediumTask = [];
  lowTask = [];
  task='';

  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  logout() {
     this.af.auth.logout();
     //console.log('logged out');
     this.router.navigateByUrl('/login');
  }

  onHighTasks(taskData:{taskName:string}){
    if((this.highTask.indexOf(taskData.taskName) === -1) && (taskData.taskName != "")){
      this.highTask.push(taskData.taskName);
    }
  }
  onMediumTasks(taskData:{taskName:string}) {
    if((this.mediumTask.indexOf(taskData.taskName) === -1) && (taskData.taskName != "")){
      this.mediumTask.push(taskData.taskName);
    }
  }
  onLowTasks(taskData:{taskName:string}) {
    if((this.lowTask.indexOf(taskData.taskName) === -1) && (taskData.taskName != "")){
      this.lowTask.push(taskData.taskName);
    }
  }
  onEdit(taskEdit:{taskedit:string}){
   // alert('calling');
    //alert(taskEdit.taskedit);
    this.task = taskEdit.taskedit;
  }


  ngOnInit() {
  }

}
