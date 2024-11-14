import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts: Post[] = [];
  // posts = [
  //   { id: 1, title: 'Post 1' },
  //   { id: 2, title: 'Post 2' },
  //   { id: 3, title: 'Post 3' },
  // ]; 
  selectedPostId: number | null = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
     this.postService.getPosts().subscribe((data) => {
       this.posts = data;
     });
  }

  selectPost(postId: number): void {
    this.selectedPostId = postId;
  }
}
