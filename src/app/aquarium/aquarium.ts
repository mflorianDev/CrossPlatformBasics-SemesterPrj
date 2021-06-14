import { IAquarium } from './aquariumInterface';

export class Aquarium {
    public tankName: string;
    public properties: Record<string, unknown>;
    public maintenance: Record<string, unknown>[];

    constructor(data: IAquarium) {
        this.tankName = data.tankName;
        this.properties = {
            length: data.length,
            width: data.width,
            height: data.height,
            volume: (data.length*data.width*data.height)/1000,
            manufacturer: data.manufacturer,
            lamp: data.lamp,
            lightingDuration: data.lightingDuration,
            co2Injection: data.co2Injection,
            airStone: data.airStone,
        };
        this.maintenance = [];
    }

}
