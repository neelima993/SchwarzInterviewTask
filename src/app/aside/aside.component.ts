import { Component, OnInit } from "@angular/core";
import { AuthorService } from "../author.service";
import { Author } from "../author";

@Component({
  selector: "app-aside",
  templateUrl: "./aside.component.html",
  styleUrls: ["./aside.component.scss"]
})
export class AsideComponent implements OnInit {
  constructor(
    private _authorService: AuthorService   
  ) {}

  selectedAuthor: Author;

  ngOnInit() {
    this._authorService.authorObservable$.subscribe(author => {
      this.selectedAuthor = author;
    });
  }
}
