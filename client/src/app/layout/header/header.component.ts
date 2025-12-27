import { Component, Input } from '@angular/core';
import { MatIcon } from "@angular/material/icon"
import { MatBadge } from "@angular/material/badge"
import { MatButton } from "@angular/material/button"

@Component({
  selector: 'app-header',
  imports: [
    MatBadge,
    MatButton,
    MatIcon,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title: string = "";
}
