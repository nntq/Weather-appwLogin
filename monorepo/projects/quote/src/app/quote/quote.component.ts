import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'shared';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit{
  quote: any;
  author: any;
  username: string;

  constructor(private http: HttpClient, private auth: AuthService){}

  ngOnInit(): void {
    this.http.get('https://api.api-ninjas.com/v1/quotes', {headers: new HttpHeaders({'X-Api-Key': '3KaiQjzB9Kk42i57SI3jdKtyI7tgVlWXJF9Vgeqs'})}).subscribe((data:any) => {
      this.quote = data[0].quote;
      this.author = data[0].author;
    });

    this.auth.userName.subscribe(val=>{console.log(val); this.username = val});
  }
}
