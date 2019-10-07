import { Output, EventEmitter, ViewChild, TemplateRef, Input } from '@angular/core';
import { Formio } from 'formiojs';

export class GridHeaderComponent {
  @Input() actionAllowed: any;
  @Output() sort: EventEmitter<any>;
  @ViewChild(TemplateRef, {static: true}) template: TemplateRef<any>;
  public headers: Array<any>;
  constructor() {
    this.headers = [];
    this.sort = new EventEmitter();
  }

  get numHeaders() {
    return this.headers.length;
  }

  load(formio: Formio, query?: any): Promise<any> {
    return Promise.resolve([]);
  }
}
