import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';
import { trigger } from '@angular/animations';
import { transition } from '@angular/animations';
import { state } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'stargirio-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('shown', style({ opacity: 1 })),
      state('notShown', style({ opacity: 0 })),
      transition('shown => notShown', [
        animate(600)
      ])
    ])
  ]
})
export class LandingScreen implements OnInit{
  show: boolean = true;
  hidden: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

  simpleFadeDone() {
    if (!this.show) {
      this.hidden = true;
    }
  }
}
