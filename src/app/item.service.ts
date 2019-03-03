import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Item } from './item';

@Injectable({
	providedIn: 'root'
})
export class ItemService {
	itemsList: Item[] = [];

	/* Used to communicate between the components */
	itemAdded = new Subject();

	/**
	 * Description: Method to store data in local storage.
	 * @param key any
	 * @param value any
	 * Return Value: Promise<boolean>
	 */
	setItem({
		key,
		value
	}: {
		key: string,
		value: any
	}) {
		return new Promise((resolve, reject) => {
			try {
				localStorage.setItem(key, JSON.stringify(value));
				resolve(true);
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 * Description: Method to fetch data from local storage.
	 * @param key any
	 * Return Value: Promise<item[]>
	 */
	getItem(key: any): Promise<Item[]> {
		return new Promise((resolve, reject) => {
			try {
				const value = localStorage.getItem(key);
   (typeof value === 'string' || value === null) ? resolve(JSON.parse(value === null ? '[]' : value)) : reject(false);
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 * Description: Method to add item data in local storage.
	 * @param itemitem item
	 * Return Value: Promise<item[]>
	 */
	async add(itemphoto: Item) {
		this.itemsList = await this.getItem('Galleria');

		/* Add the itemitem to itemsList */
		this.itemsList.push(itemphoto);
		const isAdded = await this.setItem({
			key: 'Galleria',
			value: this.itemsList
		});

		/* used to send the message to other components */
		this.itemAdded.next(this.itemsList);
	}

}

