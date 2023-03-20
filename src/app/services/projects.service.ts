import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from 'src/Environments/environment';
import {map, catchError} from 'rxjs/operators';

import { Project } from '../class/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public project$ = new Subject<Project>() ;
  public projects$ = new Subject<Project[]>() ;

  public project = new Project();
  public projects: Project[ ] = [];

  httpOptions = {
    header: new HttpHeaders({'content-Type': 'aplication/json'})
  }

  public url = environment.url

  constructor( private http: HttpClient ) {

    }
    all$():Observable<Project[]>{
      return this.projects$.asObservable();
    }
    all(): Observable<any>{
      this.projects = []
      return this.http.get<Project[]>(this.url + 'project ')
      .pipe(map((res: any) =>{
        res.forEach( (item: any) => {
            this.project = new Project();
            this.project.SetValues(item);
            this.projects.push(this.project)
         } );
         this.projects$.next(this.projects)
         } ),
      catchError((err) => of(err))
      )
        }
        }
