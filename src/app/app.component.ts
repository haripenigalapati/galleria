import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService  } from './item.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})



export class AppComponent implements OnInit {
	title = 'Galleria'; /* Title of site */
	selecteditemId = null; /* selecteditemId is an variable used to assign the passed itemid*/
	itemDetails: Item =  null; /* item is an interface where all the types are declared */
	itemslist: Item[] = null; /* itemslist is a type of interface item which refer to object of an array */
	stickyitemDetails = null; /* used for the reference to add class sticky details in app.component.html */
	@ViewChild('mainitemListing') itemListingElement: ElementRef; /* MainitemListing is the Element refernce used in app.component.html   */
	constructor(private addFetchitem: ItemService) {} /* itemservice is a service which is stored in addFetchitem */

	ngOnInit() {
		this.fetchitem();
	}

	async fetchitem() {
		try {
			this.itemslist = await this.addFetchitem.getItem('Galleria');
			this.updateitemList();
		} catch (error) {
			console.log(error);
		}
	}

	updateitemList() {

		/* subscribe method is used to recognize and update when the new items are added */
		this.addFetchitem.itemAdded.subscribe((result: Item[]) => {
			this.itemslist = result;
		});

	}

	showDetails(itemID: number) {
		this.selecteditemId = itemID;
		/* itemDetails here will have the itemslist with the passes itemId */
		this.itemDetails = this.itemslist[itemID];
	}

	closeDetails() {
		this.selecteditemId = null; /* Make the SelecteditemId to null */
		this.itemDetails =  null; /* Remove the content in the itemDetails */
	}

	@HostListener('window:scroll', []) /* HostListener is used for binding with CSS events */
	onWindowScroll() { /* Its an event called when the window is scrolled */
		const element = this.itemListingElement.nativeElement; /* el here refers to the mainitemListing */
		if (this.itemListingElement.nativeElement !== undefined) {
			const viewportOffset = element.getBoundingClientRect(); /* viewportOffset will have all the four corner values */
			const top = viewportOffset.top; /* get the top value */
			if (top < 0) {
				this.stickyitemDetails = true;
			} else {
				this.stickyitemDetails = false;
			}
		}
	}
}

