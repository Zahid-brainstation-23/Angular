import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  standalone: true,
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  imports: [
    HomeComponent,
    RouterModule,
  ],
})
export class AppComponent {
  title = 'Angular';
}
