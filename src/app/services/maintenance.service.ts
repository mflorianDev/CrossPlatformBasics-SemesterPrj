import { Injectable } from '@angular/core';

const MAINTENANCE_KEY = 'maintenance';

@Injectable({
    providedIn: 'root'
})
export class MaintenanceService {

    constructor(private storage: Storage) { }

    //TODO: Funktion muss erst angepasst werden!
    public async addMaintenance(data: any): Promise<void> {
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

}
