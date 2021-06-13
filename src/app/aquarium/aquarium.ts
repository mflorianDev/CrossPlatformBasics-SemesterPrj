import { Time } from '@angular/common';
import { IAquarium } from './aquariumInterface';

export class Aquarium implements IAquarium{
    public airStone: boolean;
    public co2Injection: boolean;
    public height: number;
    public lamp: string;
    public length: number;
    public lightingDuration: Time;
    public manufacturer: string;
    public tankName: string;
    public width: number;
    public volume: number;

    constructor(public data: IAquarium) {
        this.airStone = data.airStone;
        this.co2Injection = data.airStone;
        this.height = data.height;
        this.lamp = data.lamp;
        this.length = data.length;
        this.lightingDuration = data.lightingDuration;
        this.manufacturer = data.manufacturer;
        this.tankName = data.tankName;
        this.width = data.width;
        this.volume = (data.length*data.width*data.height)/1000;
    }
}
