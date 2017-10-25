import { InventoryItem } from './inventory-item';

export const MOCKINVENTORY: InventoryItem[] = [
	  {
	    itemNumber: 1,
	    itemOrigin: "Columbus",
	    itemEntryDate: "10/19/2017",
	    itemQuantityImported: 100,
	    itemUnit: "DZ",
	    itemDescription: "Mark's Products",
	    itemUnitCost: 50,
	    itemTotalCost: 5000,
	    itemNotes: "Test product for Mark",
	    itemPrice: 100,
	    itemZeta: 1
	  },
	  {
	    itemNumber: 2,
	    itemOrigin: "California",
	    itemEntryDate: "10/20/2017",
	    itemQuantityImported: 200,
	    itemUnit: "DZ",
	    itemDescription: "Caro's Products",
	    itemUnitCost: 100,
	    itemTotalCost: 20000,
	    itemNotes: "Caro's stuff",
	    itemPrice: 250,
	    itemZeta: 2
	  },
	  {
	    itemNumber: 3,
	    itemOrigin: "Chile",
	    itemEntryDate: "10/21/2017",
	    itemQuantityImported: 1000,
	    itemUnit: "DZ",
	    itemDescription: "Chile Product",
	    itemUnitCost: 500,
	    itemTotalCost: 500000,
	    itemNotes: "Chile test product",
	    itemPrice: 200,
	    itemZeta: 3
	  }
];