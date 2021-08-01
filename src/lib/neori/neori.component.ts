import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-neori',
  templateUrl: './neori.component.html',
  styleUrls: ['./neori.component.scss']
})
export class NeoriComponent {

  constructor() { }
    
  images = [
    {path:'../../assets/neori/neori-1.jpeg'},
    {path:'../../assets/neori/neori-2.jpeg'},
    {path:'../../assets/neori/neori-3.jpeg'},
    {path:'../../assets/neori/neori-4.jpeg'},
    {path:'../../assets/neori/neori-5.jpeg'},
    {path:'../../assets/neori/neori-6.jpeg'},
    {path:'../../assets/neori/neori-7.jpeg'},
  ]
}
