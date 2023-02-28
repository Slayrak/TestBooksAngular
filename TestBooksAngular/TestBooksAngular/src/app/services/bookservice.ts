import { GetBookDTO } from "../models/dtos/getbook.dto";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { PassBookDTO } from "../models/dtos/passbook.dto";
import { CommandResult } from "../models/enums/command-result";

@Injectable()
export class BookService {

    headers: HttpHeaders;
  
    constructor(private http: HttpClient) {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'authorization': `Bearer ${localStorage['token']}`,
      });
    }
  
    getAllBooks() {
      return this.http.get<GetBookDTO[]>(`https://localhost:5000/api/books?order=author`, { headers: this.headers });
    }
    
    getRecommendedBooks() {
        return this.http.get<GetBookDTO[]>(`https://localhost:5000/api/recommended?genre=Science%20fiction`, { headers: this.headers });
      }

      createBook(book: PassBookDTO) {
        return this.http.post<{commandResult: CommandResult;
          obj: PassBookDTO;}>(`https://localhost:5000/api/books/save`, book, { headers: this.headers })
    
      }   
  }