import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-fw pi-desktop',
                items: [

                      {
                          label: 'Textos y Fechas',
                          icon: 'pi pi-fw pi-align-left',
                          routerLink: ['/']


                      },
                      {
                          label: 'Numeros',
                          icon: 'pi pi-fw pi-dollar',
                          routerLink: ['/numbers']
                      },
                      {
                          label: 'No comunes',
                          icon: 'pi pi-fw pi-globe',
                          routerLink: ['/uncommon']
                      },

                ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-fw pi-cog',
                items: [

                        {
                            label: 'Custom pipes',
                            icon: 'pi pi-fw pi-cog',
                            routerLink:['/custom']
                        },
                    ],

            },


        ];
    }

}
