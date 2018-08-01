import { Component, OnInit,Input,DoCheck,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent implements OnInit,DoCheck {
 
   @Input() tasks = [];
   @Output() taskEditName = new EventEmitter<{taskedit:string}>();
  taskCount : number;
  editName = '';
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
    this.taskEditName.emit({
      taskedit:this.tasks[i]
    })
    this.onDelete(i);
  }

}
