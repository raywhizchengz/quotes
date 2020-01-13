import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goal:string[];
  constructor(){
    this.goals = [ 'Watch Finding Nemo', 'BUy cookies', 'Get new phone case']
  }
}
