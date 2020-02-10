import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './author';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }

  private _url= "http://jsonplaceholder.typicode.com/users/";

  private _authorId:number = -1;
  private _author:Author;

  setAuthorId(authorId:number){
    this._authorId = authorId;
    if(this._authorId!=-1){
      this.getAuthor(this._authorId).subscribe(author=>{
        this._author= author;
        this.grantAuthorDetail();  
      });
    }
    else{
      this._author=null;
      this.grantAuthorDetail();
    }
  }
  getAuthor(authorId:number){
      return this.http.get<Author>(`${this._url}${authorId}`);
  }
  private _authorSource = new Subject<Author>();
  authorObservable$ = this._authorSource.asObservable();

  grantAuthorDetail(){
    this._authorSource.next(this._author);
  }
}
