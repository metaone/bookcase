import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Header } from './shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
