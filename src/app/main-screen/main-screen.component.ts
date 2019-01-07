import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { style } from '@angular/animations';
import { transition } from '@angular/animations';
import { animate } from '@angular/animations';

class Menu {
  options: Option[] =
    [new Option('gallery'),
    new Option('about'),
    new Option('contact')
  ]

  getOption(name: string) {
    return this.options.find(x => x.name === name);
  }
}

class Option {
  constructor(name: string) {
    this.name = name;
    this.isZipped = false;
    this.isExpanded = false;
  }

  name: string;
  isZipped: boolean;
  isExpanded: boolean;
}

@Component({
  selector: 'stargirio-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('shown', style({ opacity: 1 })),
      state('notShown', style({ opacity: 0 })),
      transition('shown => notShown', [
        animate(600)
      ]),
      transition('notShown => shown', [
          animate(1200)
      ])
    ]),
    trigger('expandAnimation', [
      state('normal', style({ width: '33%' })),
      state('expanded', style({ width: '89%' })),
      state('zipped', style({ width: '5%' })),
      transition('normal => expanded', [
        animate(600)
      ]),
      transition('expanded => zipped', [
        animate(600)
      ]),
      transition('zipped => expanded', [
        animate(600)
      ]),
      transition('normal => zipped', [
        animate(600)
      ])
    ])
  ]
})
export class MainScreenComponent implements OnInit {
    loading: boolean = true;
    menu: Menu;
    galleryState: string = 'normal';
    aboutState: string = 'normal';
    contactState: string = 'normal';

    ngOnInit() {
      this.menu = new Menu();

      setTimeout(() => {
        this.loading = false;
      }, 4000);
    }

    onClick(name: string) {
      if (name === 'about') {
        document.querySelector('.about-me-holder').scrollIntoView({ 
          behavior: 'smooth' 
        });
      } else if (name === 'contact') {
        document.querySelector('.contact-holder').scrollIntoView({ 
          behavior: 'smooth' 
        });
      } else if (name === 'gallery') {
        document.querySelector('.gallery-holder').scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
}
