import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private githubService: GithubService) { }

  getProjects(): void {
    this.githubService.getProjects().subscribe(projects => this.projects = projects);
  }

  ngOnInit() {
    this.getProjects();
  }

}
