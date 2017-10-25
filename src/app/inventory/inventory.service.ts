import { Injectable } from '@angular/core';

import { InventoryItem } from './inventory-item';
import { MOCKINVENTORY } from './mock-inventory';

@Injectable() export class InventoryService {
	getItems(): Promise<InventoryItem[]> {
		return Promise.resolve(MOCKINVENTORY);
	}
	addItem(InventoryItem) {
		
	}
	getItem(itemNumber: number): Promise<InventoryItem> {
		return this.getItems().then(inventory => inventory.find(inventoryItem => inventoryItem.itemNumber === itemNumber));
	}
}