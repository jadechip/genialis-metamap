import { Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
// import { SharedService } from "../../shared/services/shared.service";

@Component({
  selector: 'metamap-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
    animations: [
        trigger('toggleHeight', [
            state('inactive', style({
                height: '0',
                opacity: '0'
            })),
            state('active', style({
                height: '*',
                opacity: '1'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})

export class SidebarComponent implements OnInit {
    sidebarVisible: boolean;

    // Sub menu visibilities
    navigationSubState:any = {
        Tables: 'inactive',
        Forms: 'inactive',
        SamplePages: 'inactive',
        UserInterface: 'inactive',
        Components: 'inactive',
        Charts: 'inactive',
    };

    // Toggle sub menu
    toggleNavigationSub(menu, event) {
        event.preventDefault();
        this.navigationSubState[menu] = (this.navigationSubState[menu] === 'inactive' ? 'active' : 'inactive');
    }

    constructor() {
        // pass as parameter -> private sharedService: SharedService
        // sharedService.sidebarVisibilitySubject.subscribe((value) => {
        //     this.sidebarVisible = value
        // })
    }

    ngOnInit() {
    }

}
