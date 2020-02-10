import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { Post } from "../post";
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  constructor(private postService: PostService, private router: Router, private authorService: AuthorService) { }

  allPosts: Post[] = [];
  displayingPost: Post[] = [];
  page = 0;
  size = 5;

  ngOnInit() {
    this.postService.getAllPosts().subscribe((data) => {
    this.allPosts = data;
      this.getData({ pageIndex: this.page, pageSize: this.size });
    });
  }

  onSelect(post: Post) {
    this.router.navigate(['./detail-page', post.id]);
  }

  getData(obj) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.displayingPost = this.allPosts.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
}
