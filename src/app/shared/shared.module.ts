import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
//import { TranslateModule } from '@ngx-translate/core';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [HeaderMenuComponent, TableComponent],
  imports: [
    CommonModule,
    AppRoutingModule

   // TranslateModule
  ],
  exports: [
    HeaderMenuComponent,
    TableComponent
  ]
})
export class SharedModule { }
