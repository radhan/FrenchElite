import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  workouts = [
    {
      id: 1,
      title: 'Programme #1',
      cover: '../../assets/img/programmefemme1.jpg'
    },
    {
      id: 2,
      title: 'Programme #2',
      cover: '../../assets/img/programmefemme2.jpg'
    },
    {
      id: 3,
      title: 'Programme #3',
      cover: '../../assets/img/programmefemme3.jpg'
    },
    {
      id: 4,
      title: 'Programme #4',
      cover: '../../assets/img/programmefemme4.jpg'
    }
  ];

  itemHeightFn(item, index) {
    return 150;
  }

  slideOpts = {
    freeMode: true,
  }
}
