import { Injectable } from '@angular/core';
import { Aquarium } from '../aquarium/aquarium';
import { IAquariumProperties } from '../aquarium/aquariumPropertiesInterface';
import { Storage } from '@ionic/storage';
import { IMaintenance } from '../maintenance/maintenanceInterface';
import { ToastController } from '@ionic/angular';

const AQUARIUMS_KEY = 'aquariums';

@Injectable({
    providedIn: 'root'
})
export class AquariumsService {

    constructor(private storage: Storage, private toastCtrl: ToastController) {
        this.init();
    }

    public async addAquariumToStorage(newAquarium: Aquarium): Promise<void> {
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
            this.showToast('New Aquarium added!');
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

    public async updateAquariumsInStorage(tank: Aquarium): Promise<void>{
        try {
            await this.storage.get(AQUARIUMS_KEY)
                .then((aquariums: Aquarium[]) => {
                    if (!aquariums) {
                        return null;
                    }
                    const newAquariumList: Aquarium[] = [];
                    for (const aquarium of aquariums) {
                        if(aquarium.tankName === tank.tankName){
                            newAquariumList.push(tank);
                        } else {
                            newAquariumList.push(aquarium);
                        }
                    }
                    this.storage.set(AQUARIUMS_KEY, newAquariumList);
                });
            this.showToast('Aquarium ' + tank.tankName + ' updated!');
        } catch (error) {
            console.log('Storage-Update-Error: ', error);
        }
    }

    public async addMaintenanceForAquariumToStorage(data: IMaintenance): Promise<void> {
        try {
            const aquariumList = await this.getAquariumsFromStorage();
            aquariumList.forEach(tank => {
                if (tank.tankName === data.tankName) {
                    tank.maintenance.push(data.maintenance);
                }
            });
            console.log(aquariumList);
            this.storage.set(AQUARIUMS_KEY, aquariumList);
            this.showToast('Maintenance added!');
        } catch (error) {
            console.log('Storage-Get-Error: ', error);
        }
    }

    public async getAllMaintenanceSortedByDate(): Promise<any[]> {
        try {
            // add tankName to each maintenance-entry and return new maintenance-list
            const addTankNameForEachMaintenanceEntry = (tankName: string, maintenanceList: any[]) => {
                const newMaintenanceList = [];
                maintenanceList.forEach(entry => {
                    entry.tankName = tankName;
                    newMaintenanceList.push(entry);
                });
                return newMaintenanceList;
            };

            const aquariums = await this.storage.get(AQUARIUMS_KEY);
            let allMaintenanceList = [];
            aquariums.forEach(tank => {
                allMaintenanceList = allMaintenanceList.concat(addTankNameForEachMaintenanceEntry(tank.tankName, tank.maintenance));
            });
            allMaintenanceList.sort(function (a: any, b: any) {
                return (a.date < b.date) ? 1 : ((a.date > b.date) ? -1 : 0);
            });
            return allMaintenanceList;
        } catch (error) {
            console.log('Storage-Get-Error: ', error);
        }
    }

    public async getAquariumsFromStorageWithSortedMaintenance(): Promise<Aquarium[]> {
        try {
            const aquariums = await this.storage.get(AQUARIUMS_KEY);
            // discard maintenance-entries without waterChange-occurrence
            aquariums.forEach(tank => {
                const newMaintenanceList = [];
                tank.maintenance.forEach(entry => {
                    if(entry.waterChange !== undefined) {
                        newMaintenanceList.push({waterChange: entry.waterChange, date: entry.date});
                    }
                });
                tank.maintenance = newMaintenanceList;
            });
            // sort maintenance-entries by date
            aquariums.forEach(tank => {
                tank.maintenance.sort(function (a: any, b: any) {
                    return (a.date < b.date) ? 1 : ((a.date > b.date) ? -1 : 0);
                });
            });
            // delete aquariums with empty maintenance-array
            for (let i=0; i<aquariums.length; i++){
                if(aquariums[i].maintenance.length === 0){
                    aquariums.splice(i,1);
                }
            }
            return aquariums;
        } catch (error) {
            console.log('Storage-Get-Error: ', error);
        }
    }

    public async getAquariumNamesFromStorage(): Promise<string[]> {
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

    public async getAquariumNamesAndPropertiesFromStorage(): Promise<any[]> {
        try {
            const aquariums = await this.getAquariumsFromStorage();
            aquariums.forEach(tank => {
                delete tank.maintenance;
            });
            return aquariums;
        } catch (error) {
            console.log('Storage-GetTankNames-Error: ', error);
        }
    }

    public async clearStorage(): Promise<void> {
        try {
            await this.storage.clear();
            this.showToast('Storage cleared!');
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

    private async showToast(msg): Promise<void> {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    }

}
