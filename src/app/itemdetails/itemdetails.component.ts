import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
	selector: 'app-itemdetails',
	templateUrl: './itemdetails.component.html',
	styleUrls: ['./itemdetails.component.css']
})
export class itemdetailsComponent {

	@Input() itemId: number = null;
	@Input() itemDetails: Item = null; /* item Details is of type item */
	@Output() closePanel = new EventEmitter<boolean>();

	constructor() { }

	closeDetails() {
		this.closePanel.emit(true);
	}

}
