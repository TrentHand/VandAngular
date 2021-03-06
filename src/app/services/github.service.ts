import { Project } from './../project';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // tslint:disable-next-line:max-line-length
  private gitHubUrl = 'https://api.github.com/search/repositories?q=topic:angular+language:angular+language:JavaScript+language:TypeScript&sort=stars&order=desc';

  constructor(
              private http: HttpClient) { }

  getProjects(): Observable <Project[]> {
    return this.http.get<{ items: Project[] }>(this.gitHubUrl)
    .pipe(
      map(response => {
        return response.items.map(project => Object.assign(new Project(), project));
      })
    );
  }

}
