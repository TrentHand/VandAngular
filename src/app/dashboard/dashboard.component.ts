import { GithubService } from './../services/github.service';
import { Project } from './../project';
import { Component, OnInit } from '@angular/core';
import { cleanSession } from 'selenium-webdriver/safari';

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
    const x = this.githubService.getProjects()
      .subscribe(projects => this.projects = projects);
    console.log('x: ', x);
  }
}
