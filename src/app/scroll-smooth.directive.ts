import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
	selector: '[appScrollSmooth]'
})

export class ScrollSmoothDirective {

	@Input() itemListingElement: ElementRef;

	@HostListener('click', ['$event'])
	public onClick(event: MouseEvent) {
		this.itemListingElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

}
