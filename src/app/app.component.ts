import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make HTTP GET request to fetch users array
    this.http.get('/users').subscribe(
      (users) => {
        console.log(users);
      },
      (error) => {
        console.error('Error fetching users:', error);
        // Handle error
      }
    );
  }
}
