import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  highTask  = [];
  mediumTask = [];
  lowTask = [];
  task='';

  

  ngOnInit(){
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
}
