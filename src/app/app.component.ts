import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'carpe-diem-master';

  constructor(private elementRef: ElementRef, private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getIpDetails()
  }

  scrollToTop(event: any): void {
    const element = this.elementRef.nativeElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(event);
  }

}



