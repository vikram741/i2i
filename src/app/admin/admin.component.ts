import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  add_book = true;
  show_request = false;
  constructor() { }

  categories = [
    "Fantasy",
"Adventure",
"Romance",
"Contemporary",
"Dystopian",
"Mystery",
"Horror",
"Thriller",
"Paranormal",
"Historical fiction",
"Science Fiction",
"Memoir",
"Motivational",
"Health",
"History",
"Travel",
"Humor",
"Children’s",
  ]
  languages = [ "Hindi","Telugu","English","Tamil","Marathi","Bengali" ]

  ngOnInit() {
  }

  addBook()
  {

  }

  addedCat = new Set<number>();
  addCat(x){
      this.addedCat.add(x);
  }
  removeCat(x)
  {
    this.addedCat.delete(x)
  }



}
