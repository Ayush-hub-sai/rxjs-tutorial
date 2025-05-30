import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

}
