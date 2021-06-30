import { Component, OnInit } from '@angular/core';
import { AquariumsService } from '../services/aquariums.service';

@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.page.html',
    styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {
    tanksList: any[] = [];
    date: string = new Date().toISOString();
    waterChange: number;
    fertilizerNPKml: number;
    fertilizerNPKdrops: number;
    fertilizerFEml: number;
    fertilizerFEdrops: number;
    liquidHumin: boolean;
    mironekuton: boolean;
    bacterAE: boolean;
    niteOut2: boolean;
    notes: string;

    constructor(private aquariumsService: AquariumsService) {
        this.generateTankHTMLSelects();
    }

    ngOnInit() {
    }

    public async onSave(): Promise<void> {
        const aquariumList = await this.aquariumsService.getAquariumsFromStorage();
        const newAquariumList = [];
        const maintenance = this.getInputValues();
        // if tank is maintenaced, update tank and push tank in newAquariumList
        this.tanksList.forEach(tank => {
            if (tank.isMaintenanced){
                aquariumList.forEach(tankFromStorage => {
                    if(tank.tankName === tankFromStorage.tankName){
                        tankFromStorage.maintenance.push(maintenance);
                        newAquariumList.push(tankFromStorage);
                    }
                });
            }
        });
        // if tank is NOT maintenaced, push tank without changes in newAquariumList
        this.tanksList.forEach(tank => {
            if (!tank.isMaintenanced){
                aquariumList.forEach(tankFromStorage => {
                    if(tank.tankName === tankFromStorage.tankName){
                        newAquariumList.push(tankFromStorage);
                    }
                });
            }
        });
        this.aquariumsService.addMaintenanceToStorage(newAquariumList);
        this.resetInputFields();
    }


    private async generateTankHTMLSelects(): Promise<void> {
        await this.aquariumsService.getAquariumNamesFromStorage()
            .then((tankNamesList) => {
                tankNamesList.forEach(tank => {
                    this.tanksList.push({
                        tankName: tank,
                        isMaintenanced: false
                    });
                });
            });
    }


    private getInputValues() {
        const maintenance = {};
        Object.assign(maintenance, { date: this.date });
        if (this.waterChange !== undefined) { Object.assign(maintenance, { waterChange: this.waterChange }); }
        if (this.fertilizerNPKml !== undefined) { Object.assign(maintenance, { fertilizerNPKml: this.fertilizerNPKml }); }
        if (this.fertilizerNPKdrops !== undefined) { Object.assign(maintenance, { fertilizerNPKdrops: this.fertilizerNPKdrops }); }
        if (this.fertilizerFEml !== undefined) { Object.assign(maintenance, { fertilizerFEml: this.fertilizerFEml }); }
        if (this.fertilizerFEdrops !== undefined) { Object.assign(maintenance, { fertilizerFEdrops: this.fertilizerFEdrops }); }
        if (this.liquidHumin) { Object.assign(maintenance, { liquidHumin: this.liquidHumin }); }
        if (this.mironekuton) { Object.assign(maintenance, { mironekuton: this.mironekuton }); }
        if (this.bacterAE) { Object.assign(maintenance, { bacterAE: this.bacterAE }); }
        if (this.niteOut2) { Object.assign(maintenance, { niteOut2: this.niteOut2 }); }
        if (this.notes !== undefined) { Object.assign(maintenance, { notes: this.notes }); }
        return maintenance;
    }

    private resetInputFields() {
        this.tanksList.forEach(tank => {
            tank.isMaintenanced = false;
        });
        this.waterChange = undefined;
        this.fertilizerNPKml = undefined;
        this.fertilizerNPKdrops = undefined;
        this.fertilizerFEml = undefined;
        this.fertilizerFEdrops = undefined;
        this.liquidHumin = false;
        this.mironekuton = false;
        this.bacterAE = false;
        this.niteOut2 = false;
        this.notes = undefined;
    }


}
