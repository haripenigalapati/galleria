import { Component, ViewChild } from '@angular/core';
import { ItemService } from '../item.service';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-additem',
	templateUrl: './additem.component.html',
	styleUrls: ['./additem.component.css'],
})

export class AdditemComponent {

	categoriesList = [
		{name: 'Mounments'},
		{name: 'Scenory'},
		{name: 'Personal'},
		{name: 'Office'}
	];  /* Array of caterogieslist with key value pair */

	/* Using the localrefernce variable addForm used in the form */
	@ViewChild ('addForm') addProductForm: NgForm;

	constructor(private addFetchitem: ItemService) { }

	formSubmit() {
		if (this.addProductForm.valid) {
			const product = this.addProductForm.value; /* Fetch all the values submitted in the form and stored in product */
			console.log(product);
			this.addFetchitem.add(product); /* pass the product as parameter to add method which is declared in item.service.ts */
		}
	}

}

