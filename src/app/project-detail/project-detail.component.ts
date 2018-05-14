import { GithubService } from './../services/github.service';
import { Project } from './../project';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }


  goBack(): void {
    this.location.back();
  }
}
