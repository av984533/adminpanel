import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { param } from 'jquery';
import { filter } from 'rxjs-compat/operator/filter';
import { Router } from '@angular/router';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  loginForm: FormGroup;
  data:any;
  params: any;
  constructor(public router: Router,
    public formBuilder: FormBuilder, private http: HttpClient) {
    this.setupLoginFormData();
  }

  ngOnInit(): void {
  }


  setupLoginFormData() {
    
    this.loginForm = this.formBuilder.group(
      {
        sort: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            
          ])
        ),
        filters: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
      },
    );
  }

  doLogin() {
    this.params = {
      "sort": this.loginForm.value.sort,
      "filters": this.loginForm.value.filters,
    }
    return new Promise((resolve, reject) => {
      this.http.post("http://13.233.27.106:8081/api/user/list?page=1", this.params).subscribe(result => {
        console.log(result,"result");
        this.data=result;
      },
        err => {
          console.log(err);
          alert("please enter correct mobile number and password");
        }
      );
    });
  }

}