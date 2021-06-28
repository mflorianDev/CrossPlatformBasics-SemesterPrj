import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aquarium } from '../aquarium/aquarium';
import { IAquariumProperties } from '../aquarium/aquariumPropertiesInterface';
import { AquariumsService } from '../services/aquariums.service';

@Component({
    selector: 'app-tank-properties-changes',
    templateUrl: './tank-properties-changes.page.html',
    styleUrls: ['./tank-properties-changes.page.scss'],
})
export class TankPropertiesChangesPage implements OnInit {
    selectedTankObj: Aquarium;
    props: IAquariumProperties;

    isDisabledTankName = true;
    isDisabledLength = true;
    isDisabledWidth = true;
    isDisabledHeight = true;
    isDisabledManufacturer = true;
    isDisabledLamp = true;
    isDisabledLightingDuration = true;
    isDisabledCo2Injection = true;
    isDisabledAirStone = true;

    constructor(private aquariumsService: AquariumsService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        const selectedTankJSON = this.route.snapshot.paramMap.get('tank');
        const tank = JSON.parse(selectedTankJSON);
        this.selectedTankObj = tank;
        this.props = this.selectedTankObj.properties;
    }

    public onUpdate() {
        console.log('New Props: ', this.props);
        if (this.selectedTankObj.tankName !== '') {
            this.selectedTankObj.properties = this.props;
            this.selectedTankObj.properties.volume = (this.props.length * this.props.width * this.props.height) / 1000;
            console.log('Tank to Update: ', this.selectedTankObj);
            this.aquariumsService.updateAquariumsInStorage(this.selectedTankObj);
            this.disableAllInputElements();
            this.router.navigate(['/tank-properties', {}]);
            //TODO: toast im Service oder hier?
        } else {
            //TODO: Ion-Alert-Komponente einbauen!
            alert('Name must be set!');
        }
    }

    public dismiss(){
        this.disableAllInputElements();
        this.router.navigate(['/tank-properties', {}]);
    }

    // Notwendig sonst würden bei erneutem Aufruf die ehemals aktvierten Felder noch immer aktiviert sein!
    private disableAllInputElements(){
        this.isDisabledTankName = true;
        this.isDisabledLength = true;
        this.isDisabledWidth = true;
        this.isDisabledHeight = true;
        this.isDisabledManufacturer = true;
        this.isDisabledLamp = true;
        this.isDisabledLightingDuration = true;
        this.isDisabledCo2Injection = true;
        this.isDisabledAirStone = true;
    }

}
