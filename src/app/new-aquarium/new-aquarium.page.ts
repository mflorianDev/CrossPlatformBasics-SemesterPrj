import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AquariumsService } from '../aquariums.service';

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

    constructor(private aquariumsService: AquariumsService) { }

    ngOnInit() {
    }

    onCreate() {
        this.aquariumsService.addAquarium({
                tankName: this.tankName,
                length: this.length,
                width: this.width,
                height: this.height,
                manufacturer: this.manufacturer,
                lamp: this.lamp,
                lightingDuration: this.lightingDuration,
                co2Injection: this.co2Injection,
                airStone: this.airStone,
            });
    }

}
