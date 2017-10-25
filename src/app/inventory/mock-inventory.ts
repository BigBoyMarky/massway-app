import { InventoryItem } from './inventory-item';

export const MOCKINVENTORY: InventoryItem[] = [
	  {
	    itemNumber: "1-1",
	    itemOrigin: "Columbus",
	    itemEntryDate: new Date("10/19/2017"),
	    itemQuantityImported: 100,
	    itemUnit: 1,
	    itemDescription: "Mark's Products",
	    itemUnitCost: 50,
	    itemTotalCost: 5000,
	    itemNotes: "Test product for Mark",
	    itemPrice: 100,
	    itemZeta: 1
	  },
	  {
	    itemNumber: "1-2",
	    itemOrigin: "California",
	    itemEntryDate: new Date("10/20/2017"),
	    itemQuantityImported: 200,
	    itemUnit: 1,
	    itemDescription: "Caro's Products",
	    itemUnitCost: 100,
	    itemTotalCost: 20000,
	    itemNotes: "Caro's stuff",
	    itemPrice: 250,
	    itemZeta: 2
	  },
	  {
	    itemNumber: "1-3",
	    itemOrigin: "Chile",
	    itemEntryDate: new Date("10/21/2017"),
	    itemQuantityImported: 1000,
	    itemUnit: 1,
	    itemDescription: "Chile Product",
	    itemUnitCost: 500,
	    itemTotalCost: 500000,
	    itemNotes: "Chile test product",
	    itemPrice: 200,
	    itemZeta: 3
	  }
];