import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  principal = 0.0;
  interest = 0.0;
  period = 0.0;
  total = 0;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { 
  	this.total = this.principal * (1 + (this.interest / 100) * this.period);
  }
}
