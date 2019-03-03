import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
	selector: 'app-listitem',
	templateUrl: './listitem.component.html',
	styleUrls: ['./listitem.component.css']
})
export class ListitemComponent {
	selecteditem = null;
	@Input() item: Item = null; /* item is of type item */
	@Input() itemID: number = null;
	@Output() itemSelect = new EventEmitter<any>();

	constructor() {}

	/* method to truncate text for description */
	textTruncate(str: string, length: number, ending: string) {
		if (length == null) {
			length = 100;
		}
		if (ending == null) {
			ending = '...';
		}
		if (str.length > length) {
			return str.substring(0, length - ending.length) + ending;
		} else {
			return str;

		}
	}

}
