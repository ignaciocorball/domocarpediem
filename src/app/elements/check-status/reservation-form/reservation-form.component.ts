import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  reservationForm: FormGroup;
  reservation: any;

  constructor(private firestore: AngularFirestore, private fb: FormBuilder, private sharedService: SharedService) {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateRange: this.fb.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      }),
      adults: ['', [Validators.required, Validators.min(1), Validators.max(2)]],
      rooms: [{value: 1, disabled: true}, Validators.required]
    });
  }

  saveReservation() {
    
    if (this.reservationForm.valid) {
      this.reservation = {
        "name": this.reservationForm.value.name,
        "email": this.reservationForm.value.email,
        "dateRange": {
          "startDate": this.reservationForm.value.dateRange.startDate.toDate(),
          "endDate": this.reservationForm.value.dateRange.endDate.toDate()
        },
        "adults": this.reservationForm.value.adults,
        "rooms": "1",
        "status": "pending",
        "createdAt": new Date(),
        "userInfo": this.sharedService.userInfo
      };
      this.firestore.collection('reservations').add(this.reservation)
      .then((response) => {
        this.sharedService.openSnackbar('Tu reserva se ha realizado con éxito');
        this.sendWhatsapp();
      })
      .catch(error => console.log('Error: ', error));
    } else {
      this.sharedService.openSnackbar('Tu reserva no se ha podido realizar, por favor revisa los datos ingresados');
    }
  }

sendWhatsapp() {
  let startDate: Date = this.reservationForm.value.dateRange.startDate.toDate();
  let endDate: Date = this.reservationForm.value.dateRange.endDate.toDate();
  let message = `Hola! Soy ${this.reservationForm.value.name} y quiero hacer una reserva.
*Email:* ${this.reservationForm.value.email}
*Fecha de entrada:* ${this.formatDate(startDate)}
*Fecha de salida:* ${this.formatDate(endDate)}
*Adultos:* ${this.reservationForm.value.adults}
*Habitaciones:* 1
Hay disponibilidad? :)`;
  let whatsappUrl = `https://wa.me/${environment.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl);
  this.reservationForm.reset();
}

  formatDate(date: Date) {
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
}
