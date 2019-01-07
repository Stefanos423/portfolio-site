import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
    selector: 'stargirio-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class Gallery implements OnInit{
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit() {
        this.galleryOptions = [
            {
              width: '900px',
              height: '600px',
              thumbnailsColumns: 4,
              imageArrowsAutoHide: true,
              thumbnailsArrowsAutoHide: true,
            }
          ];
        
          this.galleryImages = [
            {
              small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg',
              medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg',
              big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
            },
            {
              small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg',
              medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg',
              big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
            },
            {
              small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg',
              medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg',
              big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
            },
            {
              small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg',
              medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg',
              big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
            },
            {
              small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg',
              medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg',
              big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
            }      
          ];
    }
}
