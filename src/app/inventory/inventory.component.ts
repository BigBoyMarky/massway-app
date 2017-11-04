import { Component, OnInit } from '@angular/core';
import { InventoryItem } from './inventory-item';
import { InventoryService } from './inventory.service';

import { AddInventoryModalComponent } from './add-inventory-modal.component';
import { MOCKINVENTORY } from './mock-inventory';

@Component({
	selector: 'inventory',
	templateUrl: './inventory.component.html'
})

export class InventoryComponent implements OnInit {
	title="Inventory";
	inventoryItems: InventoryItem[];
  	columns = [
      { prop: 'itemNumber', name: 'Item Number' },
      { prop: 'itemOrigin', name: 'Origin' },
      { prop: 'itemEntryDate', name: 'Entry Date' },
      { prop: 'itemQuantityImported', name: 'Quantity Imported' },
      { prop: 'itemUnit', name: 'Unit' },
      { prop: 'itemDescription', name: 'Description' },
	  { prop: 'itemUnitCost', name: 'Unit Cost' },
      { prop: 'itemTotalCost', name: 'Total Cost' },
      { prop: 'itemNotes', name: 'Notes' },
      { prop: 'itemPrice', name: 'Sale Price' },
      { prop: 'itemZeta', name: 'Zeta Number' }
    ];
	rows=[];
	constructor(private inventoryService: InventoryService) { }
	ngOnInit(): void {
		this.inventoryService.getItems().then(InventoryItem => {this.rows = InventoryItem});
	}

	addItem(form: any): void {
		console.log(form.value);
		console.log(form.value.addItemNumber);
		MOCKINVENTORY.push(
		{
			"itemNumber": form.value.addItemNumber,
			"itemOrigin": form.value.addItemOrigin,
			"itemEntryDate": form.value.addItemEntryDate,
			"itemQuantityImported": form.value.addItemQuantityImported,
			"itemUnit": form.value.addItemUnit,
			"itemDescription": form.value.addItemDescription,
			"itemUnitCost": form.value.addItemUnitCost,
			"itemTotalCost": form.value.addItemTotalCost,
			"itemNotes": form.vaule.addItemNotes,
			"itemPrice": form.value.addItemPrice,
			"itemZeta": form.value.addItemZeta
		});
		//MOCKINVENTORY.push(new InventoryItem(form.addItemNumber, form.addItemOrigin, form.addItemEntryDate, form.addItemQuantityImported, form.addItemUnit, form.addItemDescription, form.addItemUnitCost, form.addItemTotalCost));
		// get the items from the form and add to array
	}
}

