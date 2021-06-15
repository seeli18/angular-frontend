import { Component, OnInit } from '@angular/core';


import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigazione',
  templateUrl: './navigazione.component.html',
  styleUrls: ['./navigazione.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class NavigazioneComponent implements OnInit {



  images = [
    {id: 1, img: "assets/img/clients/ttt.jpg", name:'Artistica Maschile'},
    {id: 2, img: "assets/img/clients/ff.jpg", name:'Artistica Femminile'},
    {id: 3, img: "assets/img/clients/rit.jpg", name:'Ginnastica Ritmica'},
    {id: 4, img: "assets/img/clients/ii.jpg", name:'Ginnastica Aerobica'},
    {id: 5, img: "assets/img/clients/pp.jpg", name:'Trampolini Elastico'},
  ];

  constructor(config: NgbCarouselConfig) {
    // 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
