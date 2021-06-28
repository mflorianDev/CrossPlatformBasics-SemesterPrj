import { Time } from '@angular/common';
import { IAquarium } from './aquariumInterface';
import { IAquariumProperties } from './aquariumPropertiesInterface';

export class Aquarium implements IAquarium {
    public tankName: string;
    public properties: IAquariumProperties;
    public maintenance: Record<string, any>[];

    constructor(
        tankName: string,
        length: number,
        width: number,
        height: number,
        manufacturer: string,
        lamp: string,
        lightingDuration: Time,
        co2Injection: boolean,
        airStone: boolean,
        maintenance: Record<string, any>[] = []
        ) {
        this.tankName = tankName;
        this.properties = {
            length,
            width,
            height,
            volume: length*height*width/1000,
            manufacturer,
            lamp,
            lightingDuration,
            co2Injection,
            airStone,
        };
        this.maintenance = maintenance;
    }

}
