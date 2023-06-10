import { Component } from '@angular/core';
// import Swiper core and required components
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-ig-section',
  templateUrl: './ig-section.component.html',
  styleUrls: ['./ig-section.component.css']
})
export class IgSectionComponent {

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    direction: 'horizontal',
    navigation: false,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: false,
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  };

  instagramPostsSlides: any = [ 
    {
      img: 'assets/img/instagram/2.jpg',
      title: '@ComoTurista nos visitó hoy!',
      description: 'Mil gracias @comoturista por elegirnos en su campaña yo turisteo en Chile! y apoyar el turismo nacional💪 Son lo máximo💯! Se quedaron para siempre en nuestros corazones💙',
      date: '25 Enero, 2021',
      href: 'https://www.instagram.com/p/CKdHi01JFf5',
      tags: ['Influencer','Viaje','Estilo de vida']
    },
    {
      img: 'assets/img/instagram/1.jpg',
      title: 'Propuesta de matrimonio 💍!',
      description: 'El amor no tiene tiempo ni edad, te puede sorprender en cualquier momento de tu vida❤🌈 ¡Gracias Nico y Barby por elegirnos!🤗',
      date: '14 Febrero, 2021',
      href: 'https://www.instagram.com/p/CLRlTebpWRD',
      tags: ['Compromiso','Matrimonio','Estilo de vida']
    },
    {
      img: 'assets/img/instagram/5.jpg',
      title: 'La primavera en Carpe Diem Patagonia',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      date: '03 Enero, 2021',
      href: 'https://www.instagram.com/domocarpediem/',
      tags: ['Primavera','Domo','Naturaleza']
    },
    {
      img: 'assets/img/instagram/4.jpg',
      title: 'Una visita inesperada',
      description: 'Hoy tuvimos una hermosa visita🥰',
      date: '08 Noviembre, 2021',
      href: 'https://www.instagram.com/domocarpediem/',
      tags: ['Golondrina','Visita inesperada','Naturaleza']
    },
    {
      img: 'assets/img/instagram/6.jpg',
      title: 'Elige vivir sano tomando agua Rizola',
      description: '¡Aquí estamos participando desde la Patagonia! ⏳ 💚',
      date: '11 Julio, 2022',
      href: 'https://www.instagram.com/domocarpediem/',
      tags: ['Rizola','Sponsor','Elige vivir sano']
    },
  ];


  openUrl(url: string) {
    window.open(url, "_blank");
  }


}
