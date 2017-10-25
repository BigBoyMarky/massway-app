import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './inventory/inventory.service';
import { AddInventoryModalComponent } from './inventory/add-inventory-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    AddInventoryModalComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    FormsModule
  ],
  providers: [
  	InventoryService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
