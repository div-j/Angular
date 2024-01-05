import { Component,Oninit } from '@angular/core';
import { FlightsService } from '../flights.service';
imports {Flight} from '../flight.model.ts'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements Oninit{

  flights: Flight[];

  constructor(private flightsService: FlightsService){}

  ngOninit(): void{
    this.displayFlights()
  }
  displayFlights(){
    this.flights = this.flightsService.getFlights();
  }

}
