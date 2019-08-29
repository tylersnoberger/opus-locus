import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  public projectDisplay: any[] = ['name', 'desc'];
  public homeworkProjects: any[] = [
    {
      name: 'Vigenere',
      description: 'basic code to compute the key to a Vigenere cipher'
    }
  ];
  public dataProjects: any[] = [
    {
      name: 'test1',
      description: 'test project 1'
    }
  ];

  // ngOninit() {
  // }
}
