import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent {

  

  constructor(
    private router: Router,
    private listingsService: ListingsService
  ){}

  onSubmit({name, description, price}: any): void{
   this.listingsService.createListing(name, description, price)
   .subscribe((res)=>{
    console.log(res);
    this.router.navigateByUrl('/my-listings');
   });
    
  }
 
}
