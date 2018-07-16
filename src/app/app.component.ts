import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <div>
  //     <h1>AppComponent</h1>
  //   </div>
  // `,
  styleUrls: ['./app.component.css']
  // styles: ['p { color: blue; }', 'span { color: red; }']
})
export class AppComponent {
  title: string = 'Greg';
  sometext = 'my text';

  displayName: boolean = true;

  fv = "FV";
  fnv = "FNV";
  mv = "MV";
  mnv = "MNV";

  names = [];

  name: string;
  nbr: number;
  amount: number;

  add(): void {
    let obj = {
      name: this.name,
      nbr: this.nbr,
      amt: this.amount
    };
    this.names.push(obj);
    this.name = "";
    this.nbr = 0;
    this.amount = 0;
    console.log(this.names);
  }

  aMessage = "Starting message";

  toggle(): void {
    this.displayName = !this.displayName;
  }
  onclick(): void {
    this.sometext = "This is some text";
  }
}
