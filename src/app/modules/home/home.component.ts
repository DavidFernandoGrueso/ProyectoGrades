import { Component, OnInit } from '@angular/core';
import {ProjectsService } from 'src/app/services/projects.service'
import { PeopleService } from 'src/app/services/people.service'

import {Project } from 'src/app/class/project'
import {Subscription } from 'rxjs'
import {People} from 'src/app/class/people'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  //project 
  projectSubscription: Subscription = new Subscription

  public project = new Project();
  public projects: Project[ ] = [];

  //people

  peopleSubscription: Subscription = new Subscription

  public people = new People();
  public peoples: People[ ] = [];

  constructor(
    public projectServices: ProjectsService,
    public peopleServices: PeopleService,
    ){  }

  ngOnInit(): void{
    console.log("Pagina inicio")
    this.projectSubscription = this.projectServices.all$().subscribe((items: Project[])=>{
      this.projects = items
    })
    this.peopleSubscription = this.peopleServices.all$().subscribe((items: People[])=>{
      this.peoples = items
    })
   
    this.projectServices.all().subscribe();
    this.peopleServices.all().subscribe();
  }
}
