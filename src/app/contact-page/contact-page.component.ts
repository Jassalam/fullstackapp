import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit{
  listing?: Listing;
  email: String = '';
  message: String = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id!!)
    .subscribe(listing => {
      this.listing = listing;
      this.message = `Hey! I am interested in your ${this.listing?.name}`;
    }); 
  }

  sendMessage(): void{
    alert('your message has been send!');
    this.router.navigateByUrl('/listings');
  }

}
