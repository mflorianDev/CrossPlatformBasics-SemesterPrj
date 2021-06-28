import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.page.html',
    styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
    myVal = {text: ''};

    constructor() { }

    ngOnInit() {
    }

    public showMyVal(){
        console.log(this.myVal);
    }

}