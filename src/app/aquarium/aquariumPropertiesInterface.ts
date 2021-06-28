import { Time } from '@angular/common';

export interface IAquariumProperties {
    length: number;
    width: number;
    height: number;
    volume: number;
    manufacturer: string;
    lamp: string;
    lightingDuration: Time;
    co2Injection: boolean;
    airStone: boolean;
}
