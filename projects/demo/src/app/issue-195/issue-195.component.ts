import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  DndDraggableDirective,
  DndDropEvent,
  DndDropzoneDirective,
  DndPlaceholderRefDirective,
} from 'ngx-drag-drop';

@Component({
  selector: 'dnd-issue-195',
  templateUrl: './issue-195.component.html',
  styleUrls: ['./issue-195.component.scss'],
  standalone: true,
  imports: [
    DndDraggableDirective,
    DndDropzoneDirective,
    DndPlaceholderRefDirective,
    JsonPipe,
  ],
})
export default class Issue195Component {
  lastDropEvent: DndDropEvent | null = null;
  dragEffect: string = '';

  onDrop(event: DndDropEvent) {
    this.lastDropEvent = event;
  }
}
