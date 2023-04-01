import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit{
  
  @Input() pageTitle: String = '';

  @Input() buttonText: any;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = '';

  @Output() onSubmit = new EventEmitter<Listing>();

  name: String = '';
  description: String = '';
  price: String = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}
 
  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
    
  }

  onButtonClicked(): void{
      this.onSubmit.emit({
        id: '',
        name: this.name,
        description: this.description,
        price: Number(this.price)
      });

  }


}
