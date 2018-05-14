# VandAngular

An Angular5/Bootstrap application using the GitHub API.
Primary purpose: display the most starred public Angular projects from GitHub.

##Project Architecture:
Each section of the code is divided into an individual componenet. Routing is handled from the app_routing.module.ts file.

GitHub Api calls are held in the github.service.ts file. 

Filtering and detailed display views are shown on the "Grid" page. Filtering logic is handled through a custom pipe in filter.pipe.ts.

#Installation instructions:
Clone this repository onto your local machine. Run '$npm install' from your terminal to load all required dependencies. Once completed, follow instructions below. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
