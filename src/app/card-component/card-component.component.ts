import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {
  title: any;
  backgroundUrl: any;
  @Input() url: any;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    this.backgroundUrl = this.data.bg;
    this.title = this.data.title;

  }

}
