import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  userInfo: any;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  getIpDetails(){
    this.http.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${environment.ipGeolocationApiKey}`).subscribe((response: any) => {
      this.userInfo = response;
    });
  }

  openSnackbar(message: string) {
    this._snackBar.open(message, '✘', {
      duration: 999999999,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
