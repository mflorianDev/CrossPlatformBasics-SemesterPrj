import { Component, OnInit } from '@angular/core';
import { Aquarium } from '../aquarium/aquarium';
import { AquariumsService } from '../services/aquariums.service';

@Component({
  selector: 'app-show-water-changes',
  templateUrl: './show-water-changes.page.html',
  styleUrls: ['./show-water-changes.page.scss'],
})
export class ShowWaterChangesPage implements OnInit {
    tanksList: Aquarium[];

    constructor(private aquariumsService: AquariumsService) {
        this.init();
    }

    ngOnInit() {}

    private async init(){
        this.tanksList = await this.aquariumsService.getAquariumsFromStorageWithSortedMaintenance();
    }

}
