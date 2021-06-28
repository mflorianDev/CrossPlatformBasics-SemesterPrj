import { Component, OnInit } from '@angular/core';
import { Aquarium } from '../aquarium/aquarium';
import { AquariumsService } from '../services/aquariums.service';

@Component({
    selector: 'app-show-all-maintenance',
    templateUrl: './show-all-maintenance.page.html',
    styleUrls: ['./show-all-maintenance.page.scss'],
})
export class ShowAllMaintenancePage implements OnInit {
    allMaintenanceList: any[];

    constructor(private aquariumsService: AquariumsService) {
        this.init();
    }

    ngOnInit() {}

    private async init(){
        this.allMaintenanceList = await this.aquariumsService.getAllMaintenanceSortedByDate();
    }


}
