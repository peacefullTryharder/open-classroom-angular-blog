import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postVote: number;

  loveNumber : number;

  constructor() { }

  ngOnInit() {
    this.loveNumber = this.postVote;
  }

  loveIncrement() {
    this.loveNumber+=1;
  }

  loveDecrement() {
    this.loveNumber-=1;
  }

}
