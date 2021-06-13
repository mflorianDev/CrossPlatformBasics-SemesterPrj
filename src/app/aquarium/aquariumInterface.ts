import { Time } from '@angular/common';

export interface IAquarium{
    airStone: boolean;
    co2Injection: boolean;
    height: number;
    lamp: string;
    length: number;
    lightingDuration: Time;
    manufacturer: string;
    tankName: string;
    width: number;
}
