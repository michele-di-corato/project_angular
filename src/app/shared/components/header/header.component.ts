import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  @Input() back: boolean = false;
  @Input() page: string = '';
  @Output() create: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}
  goToCreate() {
    this.create.emit();
  }
}
