import { Component, OnInit, Input } from '@angular/core';
import { komentar } from 'src/app/models/komentar';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment:komentar
  constructor() { }

  ngOnInit(): void {
  }

}
