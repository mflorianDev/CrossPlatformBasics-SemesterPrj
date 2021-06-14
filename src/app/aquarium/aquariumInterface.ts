import { Time } from '@angular/common';

export interface IAquarium {
    tankName: string;
    length: number;
    width: number;
    height: number;
    manufacturer: string;
    lamp: string;
    lightingDuration: Time;
    co2Injection: boolean;
    airStone: boolean;
}
