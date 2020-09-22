import { Component, OnInit, Input } from '@angular/core';
import { Adventure } from 'src/app/models/adventure';

@Component({
  selector: 'app-avantura',
  templateUrl: './avantura.component.html',
  styleUrls: ['./avantura.component.css']
})
export class AvanturaComponent implements OnInit {

  @Input()
  adventure:Adventure;
  constructor() { }

  ngOnInit(): void {
  }

}
