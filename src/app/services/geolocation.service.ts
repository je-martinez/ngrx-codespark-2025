import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private httpClient = inject(HttpClient);

  getCurrentCity(position: GeolocationPosition) {
    let params = new HttpParams();
    params = params.append("latlng", `${position.coords.latitude},${position.coords.longitude}`);
    params = params.append("key", environment.API_KEY);
    params = params.append("result_type", "locality")
    return this.httpClient.get<any>(environment.GOOGLE_API, { params }).pipe(take(1));
  }
}
