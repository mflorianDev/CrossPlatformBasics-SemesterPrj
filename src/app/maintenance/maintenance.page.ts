import { Component, OnInit } from '@angular/core';
import { AquariumsService } from '../services/aquariums.service';

@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.page.html',
    styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {
    tanksList: any[] = [];
    allTanks = false;
    date: string = new Date().toISOString();
    waterChange = 0;
    notes: string;

    constructor(private aquariumsService: AquariumsService) {
        this.generateTankHTMLSelects();
    }

    ngOnInit() {
    }

    public onSave(): void {
        this.tanksList.forEach(tank => {
            if(tank.isMaintenanced){
                this.saveMaintenaceToStorage(tank.tankName);
            }
        });
    }

    private async generateTankHTMLSelects(): Promise<void> {
        await this.aquariumsService.getTankNamesFromStorage()
            .then((tankNamesList) => {
                tankNamesList.forEach(tank => {
                    this.tanksList.push({
                        tankName: tank,
                        isMaintenanced: false
                    });
                });
            });
    }

    private saveMaintenaceToStorage(tankName: string){

    }


}
