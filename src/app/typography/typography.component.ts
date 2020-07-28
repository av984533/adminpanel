import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  data:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getdata();
  }
  getdata() {
    return new Promise((resolve, reject) => {
      this.http.get("https://www.tradesignals.io/api/allsignals").subscribe(result => {
        console.log("result", result);
        this.data = result;
      },
        err => {
          reject(err);
        }
      );
    });
  }
}

