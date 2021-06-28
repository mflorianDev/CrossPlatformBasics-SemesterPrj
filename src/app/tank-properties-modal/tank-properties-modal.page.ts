import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Aquarium } from '../aquarium/aquarium';
import { AquariumsService } from '../services/aquariums.service';

@Component({
    selector: 'app-tank-properties-modal',
    templateUrl: './tank-properties-modal.page.html',
    styleUrls: ['./tank-properties-modal.page.scss'],
})
export class TankPropertiesModalPage implements OnInit {
    @Input() selectedTankObj: Record<string, any>;

    tankName: string;
    length: number;
    width: number;
    height: number;
    manufacturer: string;
    lamp: string;
    lightingDuration: Time;
    co2Injection: boolean;
    airStone: boolean;

    isDisabledTankName = true;
    isDisabledLength = true;
    isDisabledWidth = true;
    isDisabledHeight = true;
    isDisabledManufacturer = true;
    isDisabledLamp = true;
    isDisabledLightingDuration = true;
    isDisabledCo2Injection = true;
    isDisabledAirStone = true;

    constructor(private aquariumsService: AquariumsService) {
    }

    ngOnInit() {
        console.log('Modal Input tankObj: ', this.selectedTankObj);
        this.tankName = this.selectedTankObj.tankName;
        this.length = this.selectedTankObj.length;
        this.width = this.selectedTankObj.width;
        this.height = this.selectedTankObj.height;
        this.manufacturer = this.selectedTankObj.manufacturer;
        this.lamp = this.selectedTankObj.lamp;
        this.lightingDuration = this.selectedTankObj.lightingDuration;
        this.co2Injection = this.selectedTankObj.co2Injection;
        this.airStone = this.selectedTankObj.airStone;
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
        } else {
            //TODO: Ion-Alert-Komponente einbauen!
            alert('Name must be set!');
        }
    }


}
