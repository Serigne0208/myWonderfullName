import { Component, OnInit, signal } from '@angular/core';
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

  selectedPosts = signal<Array<Post>>([]);
  
  constructor(private postService: PostService) {}

  ngOnInit(): void {
     this.postService.getPosts().subscribe((data) => {
       this.posts = data;
     });
  }

  selectPost(postId: number): void {
    this.selectedPostId = postId;
  }

//  // Fonction pour sélectionner un post
//   selectPosts(post: Post) {
//     if (!this.selectedPosts().includes(post)) {
//       this.selectedPosts.set([...this.selectedPosts(), post]);
//       console.log(this.selectedPosts.length)
//     }
//   }

  public selectPosts(post: Post): void {
    this.selectedPosts.update((oldPosts) => [...new Set([...oldPosts, post])]);
  }

  // Calculer le nombre d'auteurs distincts
  get uniqueAuthorsCount() {
    const authors = this.selectedPosts().map(post => post.author);
    console.log(new Set(authors).size);
    return new Set(authors).size;
   
  }
  
}
