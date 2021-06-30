import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Aquarium } from '../aquarium/aquarium';
import { AquariumsService } from '../services/aquariums.service';

@Component({
    selector: 'app-tank-properties',
    templateUrl: './tank-properties.page.html',
    styleUrls: ['./tank-properties.page.scss'],
})
export class TankPropertiesPage implements OnInit {
    tanksList: Aquarium[];
    selectedTankObj: Aquarium;

    constructor(private aquariumsService: AquariumsService, public modalController: ModalController, private router: Router) {
    }

    ngOnInit() {
        this.getDataFromStorage();
    }

    public compareWith(o1: any, o2: any) {
        return o1 && o2 ? o1.tankName === o2.tankName : o1 === o2;
    }

    public navigateToPropChanges(selectedTankObj: Aquarium){
        const selectedTankJSON = JSON.stringify(selectedTankObj);
        this.router.navigate(['/tank-properties-changes', {tank: selectedTankJSON}]);
    }


    private async getDataFromStorage(): Promise<void> {
        this.tanksList = await this.aquariumsService.getAquariumsFromStorage();
    }

}
