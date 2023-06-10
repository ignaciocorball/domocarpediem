import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-avalibility-form',
  templateUrl: './avalibility-form.component.html',
  styleUrls: ['./avalibility-form.component.css']
})
export class AvalibilityFormComponent {

  avalibilityForm: FormGroup;
  avalibility: any;

  constructor(private firestore: AngularFirestore, private fb: FormBuilder, private sharedService: SharedService) {
    this.avalibilityForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateRange: this.fb.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      }),
    });
  }

  saveAvalibility(){
    if(this.avalibilityForm.valid){
      this.avalibility = {
        "name": this.avalibilityForm.value.name,
        "email": this.avalibilityForm.value.email,
        "dateRange": {
          "startDate": this.avalibilityForm.value.dateRange.startDate.toDate(),
          "endDate": this.avalibilityForm.value.dateRange.endDate.toDate()
        },
        "status": "pending",
        "createdAt": new Date()
      };
      this.firestore.collection('avalibility').add(this.avalibility)
      .then((response) => {
        this.sharedService.openSnackbar('Tu solicitud se ha realizado con éxito');
        this.sendWhatsapp();
      })
      .catch(error => console.log('Error: ', error));
    }else{
      this.sharedService.openSnackbar('Tu solicitud no se ha podido realizar, por favor revisa los datos ingresados');
    }
  }


sendWhatsapp() {
  let startDate: Date = this.avalibilityForm.value.dateRange.startDate.toDate();
  let endDate: Date = this.avalibilityForm.value.dateRange.endDate.toDate();
  let message = `Hola! Soy ${this.avalibilityForm.value.name} y quiero saber si existe disponibilidad para las siguientes fechas :)
*Email:* ${this.avalibilityForm.value.email}
*Fecha de entrada:* ${this.formatDate(startDate)}
*Fecha de salida:* ${this.formatDate(endDate)}`;
  window.open(`https://api.whatsapp.com/send?phone=${environment.whatsappNumber}&text=${encodeURIComponent(message)}`, '_blank');
  this.avalibilityForm.reset();
}

  formatDate(date: Date) {
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

}
