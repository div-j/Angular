import { Injectable } from '@angular/core';
import { Flight } from './flight.model';
import { Observable, catchError ,tap} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class FlightsService {



  private apiUrl = 'http://localhost:3000/api/flights';

  constructor(private http:HttpClient) { }

  getFlights(): Observable<Flight[]>  {
    return this.http.get<Flight[]>(this.apiUrl)
 
     
  }

  getFlight(orig: string, dest: string): Observable<any> {
    const apiUrl = `http://localhost:3000/api/flights/query/${orig}/${dest}`;
    return this.http.get(apiUrl);
  }
  
 


  postFlight(flight: Flight) {

  }

  deleteFlight(id: number) {
    
  }
}
