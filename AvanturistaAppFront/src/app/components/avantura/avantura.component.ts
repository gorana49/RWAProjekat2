import { Component, OnInit, Input } from '@angular/core';
import { Avantura } from 'src/app/models/avantura';

@Component({
  selector: 'app-avantura',
  templateUrl: './avantura.component.html',
  styleUrls: ['./avantura.component.css']
})
export class AvanturaComponent implements OnInit {

  @Input()
  avanture:Avantura;
  constructor() { }

  ngOnInit(): void {
  }

}
