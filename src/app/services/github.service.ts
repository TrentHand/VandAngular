import { MessageService } from './message.service';
import { PROJECTS } from './../projects';
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

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

/** Log a GithubService message with the MessageService */
  private log(message: string) {
    this.messageService.add('GithubService: ' + message);
  }

  getProjects(): Observable <Project[]> {
    console.log('getProjects called');
    this.messageService.add('ProjectService: fetched projects');
    const feedback = this.http.get<{ items: Project[] }>(this.gitHubUrl)
    .pipe(
      map(response => {
        return response.items.map(project => Object.assign(new Project(), project));
      })
    );
    console.log('feedback', feedback);
    return feedback;
    // return of(PROJECTS);
  }

  getProject(id: number): Observable<Project> {
    this.messageService.add(`GithubService: fetched project id=${id}`);
    return of(PROJECTS.find(project => project.id === id));
  }

}
