import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  whatsappNumber = environment.whatsappNumber;
  year = new Date().getFullYear();

  newsletterForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder, 
    private afs: AngularFirestore,
    private sharedService: SharedService) { }

  onSubmit() {
    if (this.newsletterForm.valid) {
      const email = this.newsletterForm.value.email;
      const collectionRef = this.afs.collection('newsletter');
      collectionRef.add({ 
          email: email,
          userInfo: this.sharedService.userInfo
      })
      .then(() => {
        this.newsletterForm.reset();
        this.sharedService.openSnackbar('Correo electrónico agregado con éxito');
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        this.sharedService.openSnackbar('Error al agregar el correo electrónico');
      });
    }else{
      this.sharedService.openSnackbar('Ingrese un correo electrónico válido');
    }
  }

}
