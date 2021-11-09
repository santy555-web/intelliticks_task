import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http:HttpClient) { }
  submitData(data){
  let record =[];
  record.push({"fields":data})
  let final ={"records":record};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer " + environment.API
      })
    };
     this.http.post(environment.url, final, httpOptions).subscribe(
     res => {console.log('ok!');},
     err => {console.log(err.error)})
  }
  getData(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': "Bearer " + environment.API
        })
      };
      return this.http.get(environment.url, httpOptions);
    }

}



