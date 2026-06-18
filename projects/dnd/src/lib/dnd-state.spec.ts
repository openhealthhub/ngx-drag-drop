import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  startDrag,
  endDrag,
  setDropEffect,
  getDropEffect,
  getDndType,
  isExternalDrag,
  dndState,
} from './dnd-state';
import { CUSTOM_MIME_TYPE } from './dnd-utils';

function createMockDragEvent(overrides: Partial<DragEvent> = {}): DragEvent {
  return {
    dataTransfer: {
      effectAllowed: 'all',
      dropEffect: 'none',
      types: [],
    },
    ctrlKey: false,
    altKey: false,
    ...overrides,
  } as unknown as DragEvent;
}

describe('dnd-state', () => {
  beforeEach(() => {
    endDrag();
  });

  describe('startDrag', () => {
    it('should set isDragging to true', () => {
      const event = createMockDragEvent();
      startDrag(event, 'all', undefined);
      expect(dndState.isDragging).toBe(true);
    });

    it('should set effectAllowed on state and dataTransfer', () => {
      const event = createMockDragEvent();
      startDrag(event, 'copyMove', undefined);
      expect(dndState.effectAllowed).toBe('copyMove');
      expect(event.dataTransfer!.effectAllowed).toBe('copyMove');
    });

    it('should set type', () => {
      const event = createMockDragEvent();
      startDrag(event, 'all', 'myType');
      expect(dndState.type).toBe('myType');
    });

    it('should reset dropEffect to none', () => {
      const event = createMockDragEvent();
      startDrag(event, 'all', undefined);
      expect(dndState.dropEffect).toBe('none');
    });
  });

  describe('endDrag', () => {
    it('should reset all state', () => {
      const event = createMockDragEvent();
      startDrag(event, 'copyMove', 'test');
      endDrag();

      expect(dndState.isDragging).toBe(false);
      expect(dndState.dropEffect).toBeUndefined();
      expect(dndState.effectAllowed).toBeUndefined();
      expect(dndState.type).toBeUndefined();
    });
  });

  describe('setDropEffect', () => {
    it('should update state when dragging', () => {
      const event = createMockDragEvent();
      startDrag(event, 'all', undefined);

      setDropEffect(event, 'copy');
      expect(dndState.dropEffect).toBe('copy');
      expect(event.dataTransfer!.dropEffect).toBe('copy');
    });

    it('should not update state when not dragging', () => {
      const event = createMockDragEvent();
      setDropEffect(event, 'copy');
      expect(dndState.dropEffect).toBeUndefined();
      expect(event.dataTransfer!.dropEffect).toBe('copy');
    });
  });

  describe('getDropEffect', () => {
    it('should return first available effect', () => {
      const event = createMockDragEvent();
      expect(getDropEffect(event)).toBe('move');
    });

    it('should return "none" when no effects available', () => {
      const event = createMockDragEvent({
        dataTransfer: {
          effectAllowed: 'none',
        } as DataTransfer,
      });
      expect(getDropEffect(event)).toBe('none');
    });

    it('should filter by dndState effectAllowed when dragging', () => {
      const startEvent = createMockDragEvent();
      startDrag(startEvent, 'copy', undefined);

      const event = createMockDragEvent();
      expect(getDropEffect(event)).toBe('copy');
    });

    it('should filter by provided effectAllowed', () => {
      const event = createMockDragEvent();
      expect(getDropEffect(event, 'link')).toBe('link');
    });

    it('should return "copy" when ctrlKey is held and copy is available', () => {
      const event = createMockDragEvent({ ctrlKey: true } as any);
      expect(getDropEffect(event)).toBe('copy');
    });

    it('should return "link" when altKey is held and link is available', () => {
      const event = createMockDragEvent({ altKey: true } as any);
      expect(getDropEffect(event)).toBe('link');
    });

    it('should handle missing dataTransfer', () => {
      const event = {
        dataTransfer: null,
        ctrlKey: false,
        altKey: false,
      } as unknown as DragEvent;
      expect(getDropEffect(event)).toBe('move');
    });
  });

  describe('getDndType', () => {
    it('should return type from state when dragging', () => {
      const event = createMockDragEvent();
      startDrag(event, 'all', 'myType');
      expect(getDndType(event)).toBe('myType');
    });

    it('should return undefined from state when dragging with no type', () => {
      const event = createMockDragEvent();
      startDrag(event, 'all', undefined);
      expect(getDndType(event)).toBeUndefined();
    });

    it('should extract type from custom MIME type for external drag', () => {
      const event = {
        dataTransfer: {
          types: [CUSTOM_MIME_TYPE + '-myType'],
        },
      } as unknown as DragEvent;
      expect(getDndType(event)).toBe('myType');
    });

    it('should return undefined when no known MIME type on external drag', () => {
      const event = {
        dataTransfer: {
          types: ['text/plain'],
        },
      } as unknown as DragEvent;
      expect(getDndType(event)).toBeUndefined();
    });
  });

  describe('isExternalDrag', () => {
    it('should return true when not dragging', () => {
      expect(isExternalDrag()).toBe(true);
    });

    it('should return false when dragging', () => {
      const event = createMockDragEvent();
      startDrag(event, 'all', undefined);
      expect(isExternalDrag()).toBe(false);
    });
  });
});
