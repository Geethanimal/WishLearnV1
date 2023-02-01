import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Poster } from '../interfaces/poster';
 
@Injectable({
 providedIn: 'root'
})
export class PosterService {
 private url = 'http://localhost:5200';
 private posters$: Subject<Poster[]> = new Subject();
 
 constructor(private httpClient: HttpClient) { }
 
 private refreshPosters() {
   this.httpClient.get<Poster[]>(`${this.url}/posts`)
     .subscribe(posters => {
       this.posters$.next(posters);
     });
 }
 
 getPosters(): Subject<Poster[]> {
   this.refreshPosters();
   return this.posters$;
 }
 
 getPoster(id: string): Observable<Poster> {
   return this.httpClient.get<Poster>(`${this.url}/posts/${id}`);
 }
 
 createPoster(poster: Poster): Observable<string> {
   return this.httpClient.post(`${this.url}/posts`, poster, { responseType: 'text' });
 }
 
 updatePoster(id: string, poster: Poster): Observable<string> {
   return this.httpClient.put(`${this.url}/posts/${id}`, poster, { responseType: 'text' });
 }
 
 deletePoster(id: string): Observable<string> {
   return this.httpClient.delete(`${this.url}/posts/${id}`, { responseType: 'text' });
 }

 Login(poster: Poster): Observable<any> {

  return this.httpClient.post(`${this.url}/posts/login`, poster);
}
}