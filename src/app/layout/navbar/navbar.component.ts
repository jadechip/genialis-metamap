import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'metamap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems: Array<any>;

  constructor() {

    this.navItems = [
        {
            link: "['']",
            linkClass: "",
            iconClass: "zmdi zmdi-search",
            imgSrc: ""
        },
        {
            link: "['']",
            linkClass: "",
            iconClass: "zmdi zmdi-notifications",
            imgSrc: ""
        },
        {
            link: "['']",
            linkClass: "hidden-xs-down",
            iconClass: "zmdi zmdi-view-headline",
            imgSrc: ""
        },
        {
            link: "['']",
            linkClass: "hidden-xs-down",
            iconClass: "zmdi zmdi-more-vert",
            imgSrc: ""
        },
        {
            link: "",
            linkClass: "header__nav__profile",
            iconClass: "",
            imgSrc: "./assets/img/avatar.jpg"
        }                                    
    ];
        
  }

  ngOnInit() {
  }

}
