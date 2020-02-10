import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url:string = "http://jsonplaceholder.typicode.com/posts/";
  constructor(private http:HttpClient) { }

  getAllPosts(){
    return this.http.get<Post[]>(this._url);
  }

  getSinglePost(postId:number){
    return this.http.get<Post>(`${this._url}${postId}`);
  }
}
