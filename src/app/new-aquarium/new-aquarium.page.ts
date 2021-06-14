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
    manufacturer = '';
    lamp = '';
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
        } else {
            //TODO: Ion-Alert-Komponente einbauen!
            alert('Name must be set!');
        }
    }

    // TODO: kann gelöscht werden inklusive Show-Button im HTML
    public async onShow(): Promise<void> {
        const actualSorage$ = await this.aquariumsService.getAquariumsFromStorage();
        console.log(actualSorage$);
    }

}
