import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { komentar } from 'src/app/models/komentar';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input()
  comments:Observable<komentar[]>;
  constructor() { }
  
  ngOnInit(): void {
  }

}
