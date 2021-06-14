import { Injectable } from '@angular/core';
import { Aquarium } from '../aquarium/aquarium';
import { IAquarium } from '../aquarium/aquariumInterface';
import { Storage } from '@ionic/storage';

const AQUARIUMS_KEY = 'aquariums';

@Injectable({
    providedIn: 'root'
})
export class AquariumsService {
    //aquariums: Aquarium[] = [];

    constructor(private storage: Storage) {
        this.init();
    }

    public async addAquariumToStorage(data: IAquarium): Promise<void> {
        const newAquarium = new Aquarium(data);
        try {
            await this.storage.get(AQUARIUMS_KEY)
                .then((aquariums: Aquarium[]) => {
                    if (aquariums) {
                        aquariums.push(newAquarium);
                        this.storage.set(AQUARIUMS_KEY, aquariums);
                    } else {
                        this.storage.set(AQUARIUMS_KEY, [newAquarium]);
                    }
                });
        } catch (error) {
            console.log('Storage-Set-Error: ', error);
        }
    }

    public async getAquariumsFromStorage(): Promise<Aquarium[]> {
        try {
            return await this.storage.get(AQUARIUMS_KEY);
        } catch (error) {
            console.log('Storage-Get-Error: ', error);
        }
    }

    public async getTankNamesFromStorage(): Promise<string[]> {
        try {
            const aquariums = await this.getAquariumsFromStorage();
            const tankNamesList: string[] = [];
            aquariums.forEach(tank => {
                tankNamesList.push(tank.tankName);
            });
            return tankNamesList;
        } catch (error) {
            console.log('Storage-GetTankNames-Error: ', error);
        }
    }

    public async clearStorage(): Promise<void> {
        try {
            await this.storage.clear();
        } catch (error) {
            console.log('Storage-Clear-Error: ', error);
        }
    }

    private async init(): Promise<void> {
        try {
            await this.storage.create();
        } catch (error) {
            console.log('Storage-Init-Error: ', error);
        }
    }

}
