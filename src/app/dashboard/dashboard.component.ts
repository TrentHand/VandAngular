import { GithubService } from './../services/github.service';
import { Project } from './../project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.githubService.getProjects()
      .subscribe(projects => this.projects = projects);
  }
}
