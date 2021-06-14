import { Injectable } from '@angular/core';
import { AquariumsService } from './aquariums.service';
import { IMaintenance } from '../maintenance/maintenanceInterface';

const MAINTENANCE_KEY = 'maintenance';

@Injectable({
    providedIn: 'root'
})
export class MaintenanceService {

    constructor(private aquariumService: AquariumsService) { }

    public async addMaintenance(data: IMaintenance): Promise<void> {
        try {
            const aquariumList = await this.aquariumService.getAquariumsFromStorage();
            aquariumList.forEach(tank => {
                if (tank.tankName === data.tankName){
                    tank.maintenance.push(data.maintenance);
                }
            });
            console.log(aquariumList);
        } catch (error) {
            console.log('AddMaintenance-Error: ', error);
        }
    }

}
