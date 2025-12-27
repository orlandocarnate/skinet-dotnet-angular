import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  private http = inject(HttpClient); // Depedency Injection alternative to contructor

  public title = 'SkiNET';

  public products: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // http obervables automatically unsubscribes
    this.http.get<any>(this.baseUrl + 'products').subscribe({
      next: response => {
        this.products = response.data;
        console.log(response.data);
      },
      error: error => console.error(error),
      complete: () => console.log(`completed`)
    });
  }
}
