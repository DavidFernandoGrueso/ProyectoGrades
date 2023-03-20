import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from 'src/Environments/environment';
import {map, catchError} from 'rxjs/operators';

import { People } from '../class/people';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public people$ = new Subject<People>() ;
  public peoples$ = new Subject<People[]>() ;

  public people = new People();
  public peoples: People[ ] = [];

  httpOptions = {
    header: new HttpHeaders({'content-Type': 'aplication/json'})
  }

  public url = environment.url

  constructor( private http: HttpClient ) {

    }
    all$():Observable<People[]>{
      return this.peoples$.asObservable();
    }
    all(): Observable<any>{
      this.peoples = []
      return this.http.get<People[]>(this.url + 'people ')
      .pipe(map((res: any) =>{
        res.forEach( (item: any) => {
            this.people = new People();
            this.people.setValues(item)
            this.peoples.push(this.people)
         } );
         this.peoples$.next(this.peoples)
         console.log("personas", this.peoples)
         } ),
      catchError((err) => of(err))
      )
        }
        }
