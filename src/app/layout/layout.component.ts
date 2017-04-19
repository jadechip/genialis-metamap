import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'metamap-layout',
    templateUrl: './layout.component.html'
})

export class LayoutComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
      console.log("I was loaded");
    }
}
