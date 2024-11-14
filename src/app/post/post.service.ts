import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author, Post } from './models';


@Injectable({
  providedIn: 'root'
})
export class PostService {
 

   constructor(private http: HttpClient) {}

  // // Récupérer tous les posts
   getPosts(): Observable<Post[]> {
     return this.http.get<Post[]>('api/posts');
   }

  // // Récupérer un post par ID
   getPostById(id: number): Observable<Post> {
     return this.http.get<Post>(`api/posts/${id}`);
   }

  // // Récupérer un auteur par ID
   getAuthorById(id: number): Observable<Author> {
     return this.http.get<Author>(`api/authors/${id}`);
   }

 
}
