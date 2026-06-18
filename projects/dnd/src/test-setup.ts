import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// jsdom does not implement DragEvent
if (typeof globalThis.DragEvent === 'undefined') {
  (globalThis as any).DragEvent = class DragEvent extends MouseEvent {
    public dataTransfer: DataTransfer | null;
    constructor(type: string, eventInitDict?: DragEventInit) {
      super(type, eventInitDict);
      this.dataTransfer = eventInitDict?.dataTransfer ?? null;
    }
  };
}

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
