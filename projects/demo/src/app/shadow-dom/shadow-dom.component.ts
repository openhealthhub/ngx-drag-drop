import { NgTemplateOutlet } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  DndDraggableDirective,
  DndDropEvent,
  DndDropzoneDirective,
  DndPlaceholderRefDirective,
  DropEffect,
} from 'ngx-drag-drop';

interface NestableListItem {
  content: string;
  children?: NestableListItem[];
}

@Component({
  selector: 'dnd-shadow-dom',
  templateUrl: './shadow-dom.component.html',
  styleUrls: ['./shadow-dom.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
    DndDropzoneDirective,
    DndPlaceholderRefDirective,
    DndDraggableDirective,
    NgTemplateOutlet,
  ],
})
export default class ShadowDomComponent {
  nestableList: NestableListItem[] = [
    {
      content: 'Parent A',
      children: [
        { content: 'Child A.1', children: [] },
        { content: 'Child A.2', children: [] },
      ],
    },
    {
      content: 'Parent B (no children)',
    },
    {
      content: 'Parent C',
      children: [
        { content: 'Child C.1', children: [] },
        { content: 'Child C.2', children: [] },
        { content: 'Child C.3', children: [] },
      ],
    },
    {
      content: 'Parent D (empty)',
      children: [],
    },
  ];

  onDragged(
    item: NestableListItem,
    list: NestableListItem[],
    effect: DropEffect
  ) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDrop(event: DndDropEvent, list?: NestableListItem[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;
      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }
}
