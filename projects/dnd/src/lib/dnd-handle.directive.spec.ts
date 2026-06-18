import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { describe, it, expect, beforeEach } from 'vitest';
import { DndDraggableDirective } from './dnd-draggable.directive';
import { DndHandleDirective } from './dnd-handle.directive';
import { endDrag } from './dnd-state';

@Component({
  standalone: true,
  imports: [DndDraggableDirective, DndHandleDirective],
  template: `
    <div [dndDraggable]="'data'">
      <div dndHandle class="handle">handle</div>
      content
    </div>
  `,
})
class HandleHost {}

describe('DndHandleDirective', () => {
  let fixture: ComponentFixture<HandleHost>;
  let handleEl: DebugElement;

  beforeEach(async () => {
    endDrag();
    await TestBed.configureTestingModule({
      imports: [HandleHost],
    }).compileComponents();

    fixture = TestBed.createComponent(HandleHost);
    fixture.detectChanges();
    handleEl = fixture.debugElement.query(By.directive(DndHandleDirective));
  });

  it('should set draggable attribute on the handle', () => {
    expect(handleEl.nativeElement.getAttribute('draggable')).toBe('true');
  });

  it('should set _dndUsingHandle on dragstart event', () => {
    const directive = handleEl.injector.get(DndHandleDirective);
    const event = {} as any;
    directive.onDragEvent(event);
    expect(event._dndUsingHandle).toBe(true);
  });

  it('should set _dndUsingHandle on dragend event', () => {
    const directive = handleEl.injector.get(DndHandleDirective);
    const event = {} as any;
    directive.onDragEvent(event);
    expect(event._dndUsingHandle).toBe(true);
  });

  it('should unregister handle on destroy', () => {
    const draggableEl = fixture.debugElement.query(
      By.directive(DndDraggableDirective)
    );
    const directive = draggableEl.injector.get(DndDraggableDirective);
    expect((directive as any).dndHandle).toBeTruthy();

    fixture.destroy();
    expect((directive as any).dndHandle).toBeUndefined();
  });
});
