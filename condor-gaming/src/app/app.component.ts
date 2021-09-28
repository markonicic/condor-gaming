import { Component } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'condor-gaming';

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  public config: SwiperConfigInterface = {
    slidesPerView: 3,
    freeMode: true,
    loop: false,
    centeredSlides: false,
    scrollbar: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
      disabledClass: 'disabled'
    },
    keyboard: true,
    mousewheel: false,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      250: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1025: {
        slidesPerView: 3
      },
      1800: {
        slidesPerView: 4
      },
      2000: {
        slidesPerView: 5
      }
    }
  };

}
