import { Component } from '@angular/core';
import { GetBookDTO } from 'src/app/models/dtos/getbook.dto';
import { BookService } from 'src/app/services/bookservice';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  providers: [BookService]
})
export class BooksListComponent {

  public books: GetBookDTO[] = []
  public recommendedBooks: GetBookDTO[] = []

  constructor(private bookService: BookService){
      this.bookService.getAllBooks()
      .subscribe((data: GetBookDTO[]) => this.books = data);

      this.bookService.getRecommendedBooks()
      .subscribe((data: GetBookDTO[]) => this.recommendedBooks = data);

  }


  items = Array.from({length: 3}).map((_, i) => `Item #${i}`);
  
}
