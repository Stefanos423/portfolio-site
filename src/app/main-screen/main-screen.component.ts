import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { style } from '@angular/animations';
import { transition } from '@angular/animations';
import { animate } from '@angular/animations';

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
    ])
  ]
})
export class MainScreenComponent implements OnInit {
    loading: boolean = true;

    ngOnInit() {
      setTimeout(() => {
        this.loading = false;
      }, 4000);
    }
}
