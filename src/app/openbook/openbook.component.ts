import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-openbook',
  templateUrl: './openbook.component.html',
  styleUrls: ['./openbook.component.css']
})
export class OpenbookComponent implements OnInit {

  constructor() { }

  arr = [];
  ngOnInit() {
    for(var x=0;x<6;x++)this.arr.push(1)

  }

}
