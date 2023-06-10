import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() scrollTrigger = new EventEmitter<boolean>();
  public isScrolled = false;
  public whatsappNumber = environment.whatsappNumber;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (window.pageYOffset > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.scrollToTop();
      }
    });
  }

  scrollToTop(): void {
    // Emit an event to the parent component to scroll to the top of the page isScrolled value
    this.scrollTrigger.emit(true);
  }
}
