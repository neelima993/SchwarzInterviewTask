import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../post.service";
import { Post } from "../post";
import { AuthorService } from "../author.service";
import { Author } from "../author";

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})
export class DetailPageComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.authorService.setAuthorId(-1);
  }
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private authorService: AuthorService
  ) {}

  singlePostData: Post = null;
  
  ngOnInit() {
    let postId = parseInt(this.route.snapshot.paramMap.get("postId"));
    this.postService.getSinglePost(postId).subscribe(data => {
      this.singlePostData = data;
      this.authorService.setAuthorId(this.singlePostData.userId);
    });
  }
}
