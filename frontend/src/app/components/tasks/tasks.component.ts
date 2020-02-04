import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.taskService.getTasks()
    .subscribe(
      res => {
        console.log(res);
        this.tasks = res.data;
      },
      err => console.log(err)
    );


  }



}
