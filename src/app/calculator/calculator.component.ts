import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  temp: number = 0;
  result: string = '0';
  memory: number = 0;
  operator: string = '';
  isOperatorClicked: boolean;

  ngOnInit(): void {}
  public onAC() {
    this.memory = +this.result;
    this.result = '';
  }

  onNeg() {
    if (this.result[0] != '-') {
      this.result = '-' + this.result;
    } else {
      this.result = this.result.replace('-', '');
    }
  }

  onDigitClick(value: string) {
    if (this.isOperatorClicked) {
      this.result = '';
      this.isOperatorClicked = false;
    }
    if (value == '.' && this.result.includes(value)) {
    } else if (value != '0' || this.result != '0') {
      if (this.result == '0') {
        this.result = value;
      } else {
        this.result += value;
      }
    }
  }

  onOperator(value: string) {
    if (this.temp == 0) {
      this.temp = +this.result;
    } else {
      if (this.operator == '-') {
        this.result = (this.temp - +this.result).toString();
      } else if (this.operator == '+') {
        this.result = (this.temp + +this.result).toString();
      } else if (this.operator == '/') {
        this.result = (this.temp / +this.result).toString();
      } else if (this.operator == 'x') {
        this.result = (this.temp * +this.result).toString();
      } else if (this.operator == '%') {
        this.result = (this.temp % +this.result).toString();
      } else {
        this.temp = 0;
      }
      if (this.operator == '/' && this.result == '0') {
        this.temp = 0;
        this.result = '0';
      }
      this.temp = +this.result;
    }
    this.operator = value;
    this.isOperatorClicked = true;
  }
}
