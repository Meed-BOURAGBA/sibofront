import { Component, OnInit } from '@angular/core';
//import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  menuList = [];
  constructor() { }

  ngOnInit() {
    this.menuList = [
      {
        id: 1,
        libelle: "Accueil"
      },
      {
        id: 2,
        libelle: "Administration",
        sousMenu: [
          {
            id: 21,
            libelle: "Gestion des utilisateurs"
          }
        ]
      },
      {
        id: 3,
        libelle: "Deconnexion"
      }
    ]
  }

}
