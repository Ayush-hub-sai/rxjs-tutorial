import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logic-based',
  imports: [CommonModule, FormsModule],
  templateUrl: './logic-based.component.html',
  styleUrl: './logic-based.component.scss'
})
export class LogicBasedComponent {

  inputValue: string = '';
  uniqueEle: string = '';
  duplicateEle: string = '';
  UniqueData: any;

  duplicateElementString() {
    const charcount: { [key: string]: number } = {};
    this.uniqueEle = '';
    this.duplicateEle = '';

    for (let i = 0; i < this.inputValue.length; i++) {
      const element = this.inputValue[i];

      if (element === ' ') {
        continue;
      }

      if (charcount[element]) {
        charcount[element]++;
      } else {
        charcount[element] = 1;
      }

    }

    for (let char in charcount) {
      if (charcount[char] === 1) {
        this.uniqueEle += char;
      } else {
        this.duplicateEle += char;
      }
    }

  }

  removeDuplicateString: any = '';
  removeDuplicate() {
    this.removeDuplicateString = '';
    for (let index = 0; index < this.inputValue.length; index++) {
      const element = this.inputValue[index];

      if (!this.removeDuplicateString.includes(element) && element !== ' ') {
        this.removeDuplicateString += element;
      }
    }
  }

  inputValueArr: any[] = [1, 2, 4, 5, 13, 54, 4, 2, 6, 5, 53, 23, 45, 53, 53];
  uniqueEleArr: any[] = [];
  duplicateEleArr: any[] = [];
  duplicateElementArray() {
    const charcount: { [key: string]: number } = {};
    this.uniqueEleArr = [];
    this.duplicateEleArr = [];

    for (let i = 0; i < this.inputValueArr.length; i++) {
      const element = this.inputValueArr[i];

      if (charcount[element]) {
        charcount[element]++;
      } else {
        charcount[element] = 1;
      }

    }

    for (let char in charcount) {
      if (charcount[char] === 1) {
        this.uniqueEleArr.push(char);
      } else {
        this.duplicateEleArr.push(char);
      }
    }

    console.log(this.uniqueEleArr);
    console.log(this.duplicateEleArr);
    console.log(this.uniqueEleArr.concat(this.duplicateEleArr));

    let duplicateEleArr: any = []

    for (let index = 0; index < this.inputValueArr.length; index++) {
      const element = this.inputValueArr[index];

      let isDuplicate = false;
      for (let i = 0; i < duplicateEleArr.length; i++) {
        if (element == duplicateEleArr[i]) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        duplicateEleArr.push(element);
      }
    }

    console.log(duplicateEleArr);

  }


  inputValueScenario: string = '';
  taskValue: string[] = [];
  manupulateValue(arg0: string) {
    if (arg0 == 'push' && this.inputValueScenario.trim() !== '' && !this.taskValue.includes(this.inputValueScenario)) {
      this.taskValue.push(this.inputValueScenario);
    } else if (arg0 == 'pop') {
      this.taskValue.pop();
    } else if (arg0 == 'shift') {
      this.taskValue.shift();
    } else if (arg0 == 'Unshift' && this.inputValueScenario.trim() !== '') {
      this.taskValue.unshift(this.inputValueScenario);
    }
    this.inputValueScenario = '';
  }

  inputNumber: string = '';
  operatorNum: string = '';

  appendNum(num: number) {
    if (this.operatorNum !== '') {
      const ops = {
        'add': '+',
        'sub': '-',
        'cross': '*',
        'div': '/',
        'mod': '%'
      };
      const symbol = ops[this.operatorNum as keyof typeof ops];

      const parts = this.inputNumber.split(symbol);
      const lastValue = parts[parts.length - 2];

      if (!isNaN(Number(lastValue))) {
        switch (this.operatorNum) {
          case 'add':
            this.inputNumber = (Number(lastValue) + num).toString();
            break;
          case 'sub':
            this.inputNumber = (Number(lastValue) - num).toString();
            break;
          case 'cross':
            this.inputNumber = (Number(lastValue) * num).toString();
            break;
          case 'div':
            this.inputNumber = (Number(lastValue) / num).toString();
            break;
          case 'mod':
            this.inputNumber = (Number(lastValue) % num).toString();
            break;
        }
      }
      this.operatorNum = '';
    } else {
      this.inputNumber += num;
    }
  }

  operation(operator: string) {
    if (operator === 'clear') {
      this.inputNumber = '';
    } else {
      const ops = {
        'add': '+',
        'sub': '-',
        'cross': '*',
        'div': '/',
        'mod': '%'
      };
      this.inputNumber += ops[operator as keyof typeof ops];
      this.operatorNum = operator;
    }
  }

  calculateResult() {
    try {
      this.inputNumber = eval(this.inputNumber).toString();
    } catch (err) {
      this.inputNumber = 'Error';
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;

    if (!isNaN(Number(key))) {
      this.appendNum(Number(key));
    } else if (key === '+') {
      this.operation('add');
    } else if (key === '-') {
      this.operation('sub');
    } else if (key === '*') {
      this.operation('cross');
    } else if (key === '/') {
      this.operation('div');
    } else if (key === '%') {
      this.operation('mod');
    } else if (key === 'Enter') {
      this.calculateResult();
    } else if (key.toLowerCase() === 'c') {
      this.operation('clear');
    } else if (key === 'Backspace') {
      this.inputNumber = this.inputNumber.slice(0, -1);
    }
  }
}
