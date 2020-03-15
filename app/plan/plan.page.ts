import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  plan = {
    id: 1,
    title: '',
    cover: '../../assets/img/programmefemme1.jpg',
    description: ''
  }
}
