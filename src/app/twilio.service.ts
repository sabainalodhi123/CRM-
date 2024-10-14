import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare type DOMError = any;


@Injectable({
  providedIn: 'root'
})
export class TwilioService {
  private accountSid: string;
  private authToken: string;
  private apiUrl = 'http://localhost:8100/make-call';
  private twilioUrl = 'http://demo.twilio.com/docs/voice.xml';


  constructor(private http: HttpClient) {
    this.accountSid = 'AC7ab97ae269b4f70eb618361424c55c76';
    this.authToken = '3f6232fa651b32e8384641f4dca43da8';

   }


   makeCall(from: string, to: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = { from, to };
    return this.http.post(this.apiUrl, body, { headers });
  }
}
