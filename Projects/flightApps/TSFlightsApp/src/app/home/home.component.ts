import { Component } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightsService } from '../flights.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  flights: Flight[] = [];
  selectedDestination: any;
  selectedOrigin: any;

  constructor(private flightsService: FlightsService) { }

  display() {
    console.log('Button clicked!');
    this.flightsService.getFlights().subscribe({
      next: (res) => {
        this.flights = res;
        
        console.log(res);
      },
      error: (error) => {
        // Handle error
        console.error('Error:', error);
      }
    });
  }
  queryMethod(){
    const origin =this.selectedOrigin
    const destibation =  this.selectedDestination
    this.flightsService.getFlight(origin,destibation).subscribe({
      next: (res) => {
        this.flights = res;
        console.log(res);
      },
      error: (error) => {
        // Handle error
        console.error('Error:', error);
      }
    });
  }
  ngOnInit(): void {
    this.display()
  }

  
}
