import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://www.planocritico.com/wp-content/uploads/2017/07/Homem-Aranha-Filmes-Ranking.jpg"
  contentTitle:string = "MINHA NOTICIA"
  contentDescription = "Ola mundo, blablabla bla bla"
  constructor() { }

  ngOnInit(): void {
  }

}
