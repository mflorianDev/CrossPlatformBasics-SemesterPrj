import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Aquarium } from '../aquarium/aquarium';
import { AquariumsService } from '../services/aquariums.service';
import { TankPropertiesModalPage } from '../tank-properties-modal/tank-properties-modal.page';

@Component({
    selector: 'app-tank-properties',
    templateUrl: './tank-properties.page.html',
    styleUrls: ['./tank-properties.page.scss'],
})
export class TankPropertiesPage implements OnInit {
    tanksList: Aquarium[];
    selectedTankObj: Aquarium;

    constructor(private aquariumsService: AquariumsService, public modalController: ModalController) {
    }

    ngOnInit() {
        this.getDataFromStorage();
    }

    public compareWith(o1: any, o2: any) {
        return o1 && o2 ? o1.tankName === o2.tankName : o1 === o2;
    }

    public async presentModal(selectedTankObj: Aquarium) {
        console.log('Param: ', selectedTankObj);
        const modal = await this.modalController.create({
            component: TankPropertiesModalPage,
            cssClass: 'my-custom-class',
            componentProps: {selectedTankObj},
        });
        return await modal.present();
    }


    private async getDataFromStorage(): Promise<void> {
        this.tanksList = await this.aquariumsService.getAquariumsFromStorage();
    }

}
