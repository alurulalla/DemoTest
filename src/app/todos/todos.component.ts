import { Component, OnInit, EventEmitter,DoCheck,
  Output,Input,ViewChild,ElementRef,AfterContentInit,
ContentChild } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Output() highTasks = new EventEmitter<{taskName:string}>();
  @Output() lowTasks = new EventEmitter<{taskName:string}>();
  @Output() mediumTasks = new EventEmitter<{taskName:string}>();
  @Input() taskEditText = '';
  @ViewChild('taskName') taskName : ElementRef;

   
  // hightask:string = '';
  // lowtask:string = '';
  // mediumtask:string = '';
  taskEdit = '';
//text : string = this.taskEdit;

  ngOnInit() {
  }
  onHigh(taskInput : HTMLInputElement) {
    this.highTasks.emit({
      taskName : taskInput.value
    })
    taskInput.value = '';
    //this.taskName.nativeElement.value = '';
    //alert(this.taskEditText + 'before');
    //this.taskEdit = '';
    //alert(this.taskEditText + 'after');
  }
  
  onMedium(taskInput : HTMLInputElement) {
    this.mediumTasks.emit({
      taskName:taskInput.value
    })
    taskInput.value = '';
  }
  onLow(taskInput : HTMLInputElement) {
    this.lowTasks.emit({
      taskName:taskInput.value
    })
   taskInput.value = '';
  }
  

  // onEdit(taskEdit:{taskedit:string}){
  //   alert('entered');
  //   this.task = taskEdit.taskedit;
  // }

}
