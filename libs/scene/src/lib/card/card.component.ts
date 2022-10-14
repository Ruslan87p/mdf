import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

interface Post {
  title: string,
  id: number,
  author: string,
  desc: string
}
@Component({
  selector: 'ng-mdf-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(
    private postsSvc: PostsService
  ) {}

  posts: Post[] = [];

  loadEmployees() {
    return this.postsSvc.getPosts().subscribe((data: any) => {
        this.posts = data;
    });
  }

  ngOnInit(): void {
    this.loadEmployees()
  }
}
