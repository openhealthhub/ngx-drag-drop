import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { describe, it, expect, beforeEach } from 'vitest';
import {
  DndDropzoneDirective,
  DndPlaceholderRefDirective,
} from './dnd-dropzone.directive';
import { endDrag } from './dnd-state';

@Component({
  standalone: true,
  imports: [DndDropzoneDirective],
  template: `<div dndDropzone>drop here</div>`,
})
class BasicDropzoneHost {}

@Component({
  standalone: true,
  imports: [DndDropzoneDirective],
  template: `<div dndDropzone>drop here</div>`,
})
class DisabledDropzoneHost {}

@Component({
  standalone: true,
  imports: [DndDropzoneDirective, DndPlaceholderRefDirective],
  template: `
    <div dndDropzone>
      <div dndPlaceholderRef>placeholder</div>
      <div class="item">item 1</div>
    </div>
  `,
})
class PlaceholderDropzoneHost {}

@Component({
  standalone: true,
  imports: [DndDropzoneDirective],
  template: `<div [dndDropzone]="['typeA', 'typeB']">typed drop</div>`,
})
class TypedDropzoneHost {}

describe('DndDropzoneDirective', () => {
  let fixture: ComponentFixture<BasicDropzoneHost>;
  let dropzoneEl: DebugElement;

  beforeEach(async () => {
    endDrag();
    await TestBed.configureTestingModule({
      imports: [BasicDropzoneHost],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicDropzoneHost);
    fixture.detectChanges();
    dropzoneEl = fixture.debugElement.query(By.directive(DndDropzoneDirective));
  });

  it('should have the directive instance', () => {
    const directive = dropzoneEl.injector.get(DndDropzoneDirective);
    expect(directive).toBeTruthy();
  });

  it('should have default dndEffectAllowed', () => {
    const directive = dropzoneEl.injector.get(DndDropzoneDirective);
    expect(directive.dndEffectAllowed).toBe('uninitialized');
  });

  it('should have default dndDragoverClass', () => {
    const directive = dropzoneEl.injector.get(DndDropzoneDirective);
    expect(directive.dndDragoverClass).toBe('dndDragover');
  });
});

describe('DndDropzoneDirective - disabled', () => {
  let fixture: ComponentFixture<DisabledDropzoneHost>;
  let directive: DndDropzoneDirective;
  let dropzoneEl: DebugElement;

  beforeEach(async () => {
    endDrag();
    await TestBed.configureTestingModule({
      imports: [DisabledDropzoneHost],
    }).compileComponents();

    fixture = TestBed.createComponent(DisabledDropzoneHost);
    fixture.detectChanges();
    dropzoneEl = fixture.debugElement.query(By.directive(DndDropzoneDirective));
    directive = dropzoneEl.injector.get(DndDropzoneDirective);
  });

  it('should add disabled class when disabled', () => {
    directive.dndDisableIf = true;
    fixture.detectChanges();
    expect(
      dropzoneEl.nativeElement.classList.contains('dndDropzoneDisabled')
    ).toBe(true);
  });

  it('should remove disabled class when re-enabled', () => {
    directive.dndDisableIf = true;
    fixture.detectChanges();
    directive.dndDisableIf = false;
    fixture.detectChanges();
    expect(
      dropzoneEl.nativeElement.classList.contains('dndDropzoneDisabled')
    ).toBe(false);
  });
});

describe('DndDropzoneDirective - placeholder', () => {
  let fixture: ComponentFixture<PlaceholderDropzoneHost>;
  let dropzoneEl: DebugElement;

  beforeEach(async () => {
    endDrag();
    await TestBed.configureTestingModule({
      imports: [PlaceholderDropzoneHost],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceholderDropzoneHost);
    fixture.detectChanges();
    dropzoneEl = fixture.debugElement.query(By.directive(DndDropzoneDirective));
  });

  it('should remove placeholder from DOM on init', () => {
    const placeholder = dropzoneEl.nativeElement.querySelector(
      '[dndPlaceholderRef]'
    );
    expect(placeholder).toBeNull();
  });
});

describe('DndDropzoneDirective - typed', () => {
  let fixture: ComponentFixture<TypedDropzoneHost>;
  let dropzoneEl: DebugElement;

  beforeEach(async () => {
    endDrag();
    await TestBed.configureTestingModule({
      imports: [TypedDropzoneHost],
    }).compileComponents();

    fixture = TestBed.createComponent(TypedDropzoneHost);
    fixture.detectChanges();
    dropzoneEl = fixture.debugElement.query(By.directive(DndDropzoneDirective));
  });

  it('should accept typed dropzone input', () => {
    const directive = dropzoneEl.injector.get(DndDropzoneDirective);
    expect(directive.dndDropzone).toEqual(['typeA', 'typeB']);
  });
});
