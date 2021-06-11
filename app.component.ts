import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  team = [
      {
        name: 'Mauro',
        surname: 'Titanio',
        foto: 'https://placebeard.it/200x200',
        age: 29,
        description: 'front-end developer',
        mail: 'maurotitanio@gmail.com',
        mailto: 'mailto:maurotitanio@gmail.com',
        website: '',
        linkedin: '',
        githublink: 'https://github.com/',
        selected: false,
        html: '70%',
        css: '75%',
        bootstrap: '65%',
        angular: '10%',
      },
      {
        name: 'Sergio',
        surname: 'Sanchez',
        foto: 'https://www.placecage.com/200/200',
        age: 22,
        description: 'front-end developer',
        mail: 'sergiosanchez.botey@outlook.es',
        mailto: 'mailto:sergiosanchez.botey@outlook.es',
        githublink: 'github.com/',
        selected: false,
        html: '90%',
        css: '85%',
        bootstrap: '75%',
        angular: '50%',
      },
      {
        name: 'David',
        surname: 'Arreaza Gil',
        foto: 'https://www.stevensegallery.com/200/200',
        age: 29,
        description: 'front-end developer',
        mail: '',
        mailto: '',
        githublink: '',
        selected: false,
        html: '80%',
        css: '95%',
        bootstrap: '75%',
        angular: '60%',
      }
    ];
  }
