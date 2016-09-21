import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Admiral Ackbar'},
  { id: 12, name: 'Greedo' },
  { id: 13, name: 'C-3PO' },
  { id: 14, name: 'Qui-Gon Jinn' },
  { id: 15, name: 'Padmé Amidala' },
  { id: 16, name: 'Darth Vader' },
  { id: 17, name: 'Lando Calrissian' },
  { id: 18, name: 'Darth Maul' },
  { id: 19, name: 'Emperor Palpatine' },
  { id: 20, name: 'Obi-Wan Kenobi' },
  { id: 21, name: 'Yoda' },
  { id: 22, name: 'R2-D2' },
  { id: 23, name: 'Boba Fett' },
  { id: 24, name: 'Chewbacca' },
  { id: 25, name: ' Princess Leia' },
  { id: 26, name: 'Luke Skywalker' },
  { id: 26, name: 'Han Solo' }

]

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<div *ngIf="selectedHero">
		<h2>{{selectedHero.name}} details!</h2>
		<div><label>id: </label>{{selectedHero.id}}</div>
		<div><label>name: </label>
		<input [(ngModel)]="selectedHero.name"  placeholder="name">
	</div>

	</div>
	

	<h2>My Heroes</h2>
	<ul class="heroes">
		<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
		<span class="badge">{{hero.id}}</span>{{hero.name}}
		</li>
	</ul>
	`,
	styles: [`
	  .selected {
	    background-color: #CFD8DC !important;
	    color: white;
	  }
	  .heroes {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 15em;
	  }
	  .heroes li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: .5em;
	    padding: .3em 0;
	    height: 1.6em;
	    border-radius: 4px;
	  }
	  .heroes li.selected:hover {
	    background-color: #BBD8DC !important;
	    color: white;
	  }
	  .heroes li:hover {
	    color: #607D8B;
	    background-color: #DDD;
	    left: .1em;
	  }
	  .heroes .text {
	    position: relative;
	    top: -3px;
	  }
	  .heroes .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: .8em;
	    border-radius: 4px 0 0 4px;
	  }
	`]


})

export class AppComponent { 

	heroes = HEROES;

	selectedHero: Hero;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	title = 'Tour of Heroes';
	

}