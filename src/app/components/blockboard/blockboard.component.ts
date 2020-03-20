import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blockboard',
  templateUrl: './blockboard.component.html',
  styles: []
})
export class BlockboardComponent implements OnInit {
  @Input() movies;

  constructor() {}

  ngOnInit(): void {

  }

}
