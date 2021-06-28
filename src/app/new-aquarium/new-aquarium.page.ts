import { Time } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AquariumsService } from '../services/aquariums.service';

@Component({
    selector: 'app-new-aquarium',
    templateUrl: './new-aquarium.page.html',
    styleUrls: ['./new-aquarium.page.scss'],
})
export class NewAquariumPage implements OnInit {
    tankName = '';
    length: number;
    width: number;
    height: number;
    manufacturer: string;
    lamp: string;
    lightingDuration: Time;
    co2Injection = false;
    airStone = false;

    constructor(private aquariumsService: AquariumsService) { }

    ngOnInit() {
    }

    public onCreate() {
        if (this.tankName !== '') {
            this.aquariumsService.addAquariumToStorage({
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
            //TODO: toast im Service oder hier?
            this.resetInputFields();
        } else {
            //TODO: Ion-Alert-Komponente einbauen!
            alert('Name must be set!');
        }
    }

    private resetInputFields() {
        this.tankName = '';
        this.length = undefined;
        this.width = undefined;
        this.height = undefined;
        this.manufacturer = undefined;
        this.lamp = undefined;
        this.lightingDuration = undefined;
        this.co2Injection = false;
        this.airStone = false;
    }

}
