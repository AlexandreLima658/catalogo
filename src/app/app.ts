import { Component, signal } from '@angular/core';
import { Header } from "./components/template/header/header";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('catalogo');
}
