import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemList } from '../../interfaces/list.interface';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  @Input() list: ItemList[] = [];
  @Output() idToSelect: EventEmitter<number> = new EventEmitter<number>();
  @Output() idToEdit: EventEmitter<number> = new EventEmitter<number>();
  @Output() idToDelete: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}
  selectById(id: number) {
    this.idToSelect.emit(id);
  }
  editById(id: number) {
    this.idToEdit.emit(id);
  }
  deleteById(id: number) {
    this.idToDelete.emit(id);
  }
}
