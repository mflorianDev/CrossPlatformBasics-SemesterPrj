import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-aquarium',
  templateUrl: './new-aquarium.page.html',
  styleUrls: ['./new-aquarium.page.scss'],
})
export class NewAquariumPage implements OnInit {
    tankName: string;
    length: number;
    width: number;
    height: number;
    manufacturer: string;
    lamp: string;
    lightingDuration: Time;
    co2Injection: boolean;
    airStone: boolean;

  constructor() { }

  ngOnInit() {
  }

  onCreate(){}

}
