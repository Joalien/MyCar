import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class Globals {
  urlBackEnd: string = "http://localhost:8001/v2/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept' : 'application/json'
    })
  };

}
