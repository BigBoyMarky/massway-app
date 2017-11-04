import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './inventory/inventory.service';
import { AddItemToInventoryComponent } from './inventory/add-item-to-inventory.component';

const appRoutes: Routes = [
  { path: 'add-item-to-inventory', component: AddItemToInventoryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    AddItemToInventoryComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [
  	InventoryService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
