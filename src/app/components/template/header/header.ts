import { Component, Output,EventEmitter } from '@angular/core';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header{

  @Output() logoutEvent = new EventEmitter<void>();

  logout() {
    this.logoutEvent.emit()
  }
}
