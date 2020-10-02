import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-questions-set1',
  templateUrl: './questions-set1.component.html',
  styleUrls: ['./questions-set1.component.scss']
})
export class QuestionsSet1Component implements OnInit {
  checkoutForm: any;
  // tslint:disable-next-line: no-inferrable-types
  clickCounter: number = 0;
  typeOfShoes: string[] = ['Boots', 'Clogs'];
  selection: Selection;
  
    constructor(
      private route: ActivatedRoute,
      private formBuilder: FormBuilder
    ) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: '',
        search: ''
      });
    }
    // tslint:disable-next-line: typedef
    ngOnInit() {
      this.clickCounter = 0;
    }
  
    // tslint:disable-next-line: typedef
    share(): void {
      window.alert('The product has been selected!');
    }
  
    // tslint:disable-next-line: typedef
    onSubmit(customerData: any): void {
      console.log(customerData);
      this.checkoutForm.reset();
      console.warn('Submitted', customerData);
    }
  
    // tslint:disable-next-line: typedef
    countClick(): void {
      this.clickCounter += 1;
      console.log(this.clickCounter);
    }
  // constructor() { }

  // ngOnInit(): void {
  // }

}
