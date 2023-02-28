import { Component, Input } from '@angular/core';
import { GetBookDTO } from 'src/app/models/dtos/getbook.dto';

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.scss']
})


export class BooksListItemComponent {
  @Input() book!: GetBookDTO;

}

