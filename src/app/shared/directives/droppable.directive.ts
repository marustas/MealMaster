import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DragDropService } from '../services/drag-drop.service';

@Directive({
  selector: '[appDroppable]',
})
export class DroppableDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private dragDrop: DragDropService
  ) {}

  @HostListener('mouseenter', ['$event'])
  onDragEnter(event: MouseEvent): void {
    event.preventDefault();
    if (this.dragDrop.draggedItem) {
      this.renderer.setStyle(this.element.nativeElement, 'border', '2px dashed rgb(211, 110, 110)');
      this.renderer.setStyle(this.element.nativeElement, 'background-color', 'rgb(217, 145, 145)');
    }
  }

  @HostListener('mouseleave', ['$event'])
  onDragLeave(event: MouseEvent): void {
    event.preventDefault();
    if (this.dragDrop.draggedItem) {
      this.renderer.removeStyle(this.element.nativeElement, 'border');
      this.renderer.removeStyle(this.element.nativeElement, 'background-color');
    }
  }

  @HostListener('mouseup', ['$event'])
  onDrop(event: MouseEvent) {
    event.preventDefault();
    this.dragDrop.addDraggedItem();
    this.renderer.removeStyle(this.element.nativeElement, 'border');
    this.renderer.removeStyle(this.element.nativeElement, 'background-color');
  }
}
