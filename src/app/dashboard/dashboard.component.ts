import { GithubService } from './../services/github.service';
import { Project } from './../project';
import { Component, OnInit } from '@angular/core';
import { cleanSession } from 'selenium-webdriver/safari';
import { FilterPipe } from '../filter.pipe';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  displayDetails = false;
  searchText: string;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    const x = this.githubService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  displayDetailsEvent(id) {
    this.projects.forEach((project) => {
      if (project.id === id) {
        project.displayDetails = !project.displayDetails;
      }
    });
  }

}
