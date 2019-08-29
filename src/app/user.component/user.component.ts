import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
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