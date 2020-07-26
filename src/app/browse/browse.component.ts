import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor() { }

  arr=[]
  ngOnInit() {
    for(var x=0;x<6;x++)this.arr.push(1)
  }

}
