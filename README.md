# SchwarzInterviewTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Please Run `npm install` to download the Dependancies.
Then, Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Why Angular? 

It is a full-fledged MVC framework that can run in any browser or platform. Moreover, it is consistent with ready-made tools, ng components are robust. It allows to reuse components and create SPA (Single Page Applications) that are light weight and run on the client machine. 


## Component Description

Header Component:      Contains Navigation bar (Responsive) on hover.
Main Component :       This consists of 100 selectable posts.
Detail-Page Component: Contains Users selected Post Details.
Aside Component :      This is the context area (Author Details are displayed).

## Service Description
A: post Service:          Meant to call EndPoint for fetching Posts.
B: author Service:        Meant to call Endpoint for fetching Author Details.

## Routing/Navigation Module
To navigate through different pages based on user interaction by reflecting it in URL, the paths have been defined in app-routing.ts Module.

## Program Flow 
Program has been structured and modularized into several Components and Services.
On Clicking the links on the main-page (consisting of 100 posts), user is redirected to Detail-Page of the selected Post, as well as the aside-component gets updated with the selected Post's associated Author Details. (i.e Website Name and Author Name).
