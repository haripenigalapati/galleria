import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdditemComponent } from './additem/additem.component';
import { itemdetailsComponent } from './itemdetails/itemdetails.component';
import { ListitemComponent } from './listitems/listitem.component';

import { ScrollSmoothDirective } from './scroll-smooth.directive';

import { ItemService } from './item.service';

@NgModule({

	declarations: [
		AppComponent,
		ListitemComponent,
		AdditemComponent,
		itemdetailsComponent,
		ScrollSmoothDirective
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [AdditemComponent, ItemService],
	bootstrap: [AppComponent]

})

export class AppModule { }
