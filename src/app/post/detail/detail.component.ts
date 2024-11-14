import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  post!: Post;
  posts: Post[] = []; 
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  // ngOnInit(): void {
  //   const postId = +this.route.snapshot.paramMap.get('id')!;
  //   this.postService.getPostById(postId).subscribe((data) => {
  //     this.post = data;
  //   });
  // }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = +params.get('id')!;  // Utiliser paramMap pour récupérer l'ID
      this.postService.getPostById(postId).subscribe((data) => {
        this.post = data;
        // Assurez-vous que l'ID de l'auteur est bien récupéré
        console.log("Auteur ID: ", this.post.author);
        console.log("Auteur ID: ", this.post.title);
      });
    });

    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

}
