import { Component, OnInit,Input,DoCheck,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-high',
  templateUrl: './high.component.html',
  styleUrls: ['./high.component.css']
})
export class HighComponent implements OnInit,DoCheck {

  @Input() tasks = [];
  @Output() taskEditName = new EventEmitter<{taskedit:string}>();
  taskCount : number;
  editName = '';
  //isChecked = false;
  todo= false;
  constructor() { }

  ngDoCheck(){
    this.taskCount = this.tasks.length;
  }

  ngOnInit() {
  }

  onDelete(i:number){
    this.tasks.splice(i,1);
  }
  
  onEdit(i:number){
    //alert(this.tasks[i]);
    this.taskEditName.emit({
      taskedit:this.tasks[i]
    })
    this.onDelete(i);
  }
}
