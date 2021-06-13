import { Injectable } from '@angular/core';
import { Aquarium } from './aquarium/aquarium';
import { IAquarium} from './aquarium/aquariumInterface';

@Injectable({
  providedIn: 'root'
})
export class AquariumsService {
    aquariums: Aquarium[] = [];

    constructor() {}

    public addAquarium(data: IAquarium){
        this.aquariums.push(new Aquarium(data));
        console.log(this.aquariums);
    }

    public getAquariums(): Aquarium[] {
        return this.aquariums;
    }
}
