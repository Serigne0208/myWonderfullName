import { Component, OnInit, signal } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models';
import { LoggerLevel, LoggerService } from '../../../../projects/my-lib/src/lib/logger.service';


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
  
  constructor(private postService: PostService,private logger: LoggerService) {
    // Modifier le niveau de log pour ce composant
    this.logger.setLogLevel(LoggerLevel.WARN);
  }

  ngOnInit(): void {
     this.postService.getPosts().subscribe((data) => {
       this.posts = data;
     });

    this.logger.log(LoggerLevel.INFO, 'Ceci est un message INFO.'); 
    this.logger.log(LoggerLevel.WARN, 'Ceci est un message WARN.');
    this.logger.log(LoggerLevel.ERROR, 'Ceci est un message ERROR.');
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
