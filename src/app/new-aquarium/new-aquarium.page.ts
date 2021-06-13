import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AquariumsService } from '../services/aquariums.service';

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
    }

    // TODO: kann gelöscht werden inklusive Show-Button im HTML
    public async onShow(): Promise<void> {
        const actualSorage$ = await this.aquariumsService.getAquariumsFromStorage();
        console.log(actualSorage$);
    }

}
