import { Component } from '@angular/core';
import { BookService } from 'src/app/services/bookservice';
import { PassBookDTO } from 'src/app/models/dtos/passbook.dto';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
  providers: [BookService]
})
export class EditBookComponent {

  

  constructor(private bookService: BookService){
  }
  
  AddBook(){
    const passBook: PassBookDTO = new PassBookDTO();

    passBook.author = (document.getElementById("inputAuthor") as HTMLInputElement).value
    passBook.content = (document.getElementById("contentTextArea") as HTMLInputElement).value
    passBook.cover = (document.getElementById("inputGroupFile04") as HTMLInputElement).value
    passBook.genre = (document.getElementById("inputGenre") as HTMLInputElement).value
    passBook.title = (document.getElementById("inputTitle") as HTMLInputElement).value

    this.bookService.createBook(passBook).subscribe(data => {});
  }


  Clear(){
    (document.getElementById("inputTitle") as HTMLInputElement).value = '';
    (document.getElementById("inputGroupFile04") as HTMLInputElement).value = '';
    (document.getElementById("inputGenre") as HTMLInputElement).value = '';
    (document.getElementById("inputAuthor") as HTMLInputElement).value = '';
    (document.getElementById("contentTextArea") as HTMLInputElement).value = '';
  }
}