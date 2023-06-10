import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  whatsappMessage: string = `
    Hola! vengo desde la webapp y me gustaría recibir más información sobre sus servicios 😊
  `;

  ngOnInit() { }

  openURL(url: string){
    window.open(url, "_blank");
  }

}
