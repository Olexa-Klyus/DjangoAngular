import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cars: any[] = []

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any[]>('http://localhost:8000/cars').subscribe(value => console.log(value))
  }

  ngOnInit(): void {
  }
}
