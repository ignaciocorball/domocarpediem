import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.css']
})
export class ReviewsSectionComponent {

  config2: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    direction: 'horizontal',
    navigation: false,
    pagination: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
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
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1920: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }
  };

  reviewsSlides: any = [
    {
      img: 'assets/img/review-82.jpg',
      title: 'Absolutely GORGEOUS! Wonderful hosts!',
      description: 'Everything about the beautiful property and wonderful owners was fantastic!  Thank you Cesar and Roxana for a wonderful incredible stay!  Immaculately put together and clearly a labor of love.  Wonderful hosts!!  We wished our stay was longer. Absolutely lovely.',
      name: 'Court75',
      country: '🇺🇸',
      rating: 5,
    },
    {
      img: 'assets/img/review-78.jpg',
      title: 'Excepcional',
      description: 'La atención fue increible Roxana muy preocupada que todo ande bien, me encanto el lugar es ideal para descansar o ir en pareja, una vista espectacular y todo muy comodo. Volvería a ir seguro, para estar un poco alejado de la ciudad tiene internet y todas las comodidades necesarias.  La experiencia de quedarse en un Domo con una vista así totalmente recomendable muy relajante ojala poder volver pronto.',
      name: 'Daniel',
      country: '🇨🇱',
      rating: 5,
    },
    {
      img: '',
      title: '',
      description: 'Hôtes très agréables et serviables. Nous avons dormis à Carpe Diem la nuit de Noël, cétait magique, très bien décoré ! Rien a redire, tout était parfait, nous conseillons vraiment !!!!!',
      name: 'Robin',
      country: '🇫🇷',
      rating: 5,
    },
    {
      img: '',
      title: 'Un lugar mágico',
      description: 'todooooo, realmente espectacular, muy lindo, limpio, la atención extraordinaria es un lugar que de seguro volveré todas las veces que pueda',
      name: 'Sebastian',
      country: '🇨🇱',
      rating: 5,
    },
    {
      img: '',
      title: 'Encantador refugio en Coyhaique',
      description: 'El domo en sí: calentito aún sin encender calefacción, una inteligentísima distribución de los 25m2 , la decoración que cuidaba cada detalle',
      name: 'Danay',
      country: '🇨🇱',
      rating: 5,
    },
    {
      img: '',
      title: 'Lugar de ensueño',
      description: 'Me gusto mucho la vista, la amabilidad de Roxana muy acogedora, el domo es muy lindo',
      name: 'Juan',
      country: '🇨🇱',
      rating: 5,
    },
    {
      img: '',
      title: 'Excepcional',
      description: 'El lugar increíble y quienes te recibían son un muy amables!',
      name: 'Francisca',
      country: '🇨🇱',
      rating: 5,
    },
    {
      img: 'assets/img/review-79.jpg',
      title: 'Maravillosa',
      description: 'Increíble la atención de sus dueños. El lugar increíble para descansar y desconectarse. El domo muy buen equipado con todo lo necesario. Realmente un alojamiento de lujo!',
      name: 'Gómez',
      country: '🇨🇱',
      rating: 5,
    },
    {
      img: 'assets/img/review-77.jpeg',
      title: 'Definitivamente lo mejor de Coyhaique!',
      description: 'Nos encantó la vista y la buena recepción de Roxana y César. Todo muy limpio y ordenado. Tuvimos el mejor servicio.',
      name: 'Kathy',
      country: '🇨🇱',
      rating: 5,
    },
    {
      img: 'assets/img/review-80.jpg',
      title: 'Agradable experiencia en Carpe Diem',
      description: 'La amabilidad de Roxana, quien nos ayudó a sentirnos como en casa. Además, el domo es sumamente cómodo, y la decoración muy agradable. Fueron sin duda días de relajo.',
      name: 'Sarriazab',
      country: '🇨🇱',
      rating: 5,
    },
    {
      img: '',
      title: 'Idílico',
      description: 'Me encantó la calidez con como te recibían muy preocupados; te llevaban al súper a comprar si no tenías auto ofrecían todas las facilidades y habían alimentos deliciosos y saludables para tomar desayuno. Tele con netflix y una vista de ensueño, totalmente recomendable!!!!',
      name: 'Francisca',
      country: '🇨🇱',
      rating: 5,
    },
    {
      img: 'assets/img/review-81.jpg',
      title: 'A dream place!',
      description: 'We have visited many places around the world, and this has by far been our best experience. A charming place, with beautiful landscapes everywhere. The dome we live in has a wonderful view, and the owners, Roxana and Cesar, are magnificent, very friendly and always attentive to everything. Walking up the mountain you come to a kind of enchanted garden, completely natural. A dream place. If you have the opportunity, do yourself a favor and enjoy such a peaceful place, excellent for meditating, reading, and relaxing while enjoying the animals and nature. It is a place that remains in memory forever.',
      name: 'Jorge',
      country: '🇨🇿',
      rating: 5,
    },
    {
      img: '',
      title: 'Dear Roxana and Cesar, thanks a lot for a such cozy and exceptional staying. Your place is very special! ',
      description: 'Property has more then you need for staying what is really very great and a rarity!',
      name: 'Arisa',
      country: '🇱🇹',
      rating: 5,
    },
    {
      img: '',
      title: 'Amazing!!',
      description: 'What is not to like,  the domo is super cool, comfortable & clean and has everything you need.  Beautiful view, fully stocked kitchen, nice bathroom, comfortable bed.  The hosts Caesar and Roxanna are the nicest people and will help with anything you need.  Love this Place!! We want to go back ASAP!!!',
      name: 'Marc',
      country: '🇺🇸',
      rating: 5,
    },
    {
      img: '',
      title: 'Excepcional',
      description: 'I stayed two nights with my wife there. It was a lifetime experience. This could be the perfect destination for a week or more.  We both went upside by walking and no one in the surroundings.',
      name: 'Amir',
      country: '🇮🇳',
      rating: 5,
    },
  ];

  openURL(url: string){
    window.open(url, "_blank");
  }
}
