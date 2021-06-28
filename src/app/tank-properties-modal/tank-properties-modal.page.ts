import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Aquarium } from '../aquarium/aquarium';
import { IAquariumProperties } from '../aquarium/aquariumPropertiesInterface';
import { AquariumsService } from '../services/aquariums.service';

@Component({
    selector: 'app-tank-properties-modal',
    templateUrl: './tank-properties-modal.page.html',
    styleUrls: ['./tank-properties-modal.page.scss'],
})
export class TankPropertiesModalPage implements OnInit {
    @Input() selectedTankObj: Aquarium;
    props: IAquariumProperties;
    lamp: string;

    isDisabledTankName = true;
    isDisabledLength = true;
    isDisabledWidth = true;
    isDisabledHeight = true;
    isDisabledManufacturer = true;
    isDisabledLamp = true;
    isDisabledLightingDuration = true;
    isDisabledCo2Injection = true;
    isDisabledAirStone = true;

    constructor(private aquariumsService: AquariumsService, public modalController: ModalController) {
    }

    ngOnInit() {
        this.props = this.selectedTankObj.properties;
        this.lamp = this.selectedTankObj.properties.lamp;
    }

    public onUpdate() {
        console.log('new lamp-value: ', this.lamp);
        console.log('New Props: ', this.props);
        if (this.selectedTankObj.tankName !== '') {
            this.selectedTankObj.properties = this.props;
            this.selectedTankObj.properties.volume = (this.props.length*this.props.width*this.props.height)/1000;
            console.log('Tank to Update: ', this.selectedTankObj);
            this.aquariumsService.updateAquariumsInStorage(this.selectedTankObj);
            this.dismiss();
            //TODO: toast im Service oder hier?
        } else {
            //TODO: Ion-Alert-Komponente einbauen!
            alert('Name must be set!');
        }
    }

    public dismiss(){
        this.modalController.dismiss({
            dismissed: true
        });
    }


}
