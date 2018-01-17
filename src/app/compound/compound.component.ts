import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css']
})
export class CompoundComponent implements OnInit {
  principal = 0.0;
  interest = 0.0;
  period = 0.0;
  freq = 0.0;
  total = 0;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { 
  	this.total = (this.principal * Math.pow(1+(this.interest/(100*this.freq)), this.freq*this.period));
  }

}
