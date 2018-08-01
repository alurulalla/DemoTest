import { Component, OnInit,Input,DoCheck,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-low',
  templateUrl: './low.component.html',
  styleUrls: ['./low.component.css']
})
export class LowComponent implements OnInit,DoCheck {
 
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
