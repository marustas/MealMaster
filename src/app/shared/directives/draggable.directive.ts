import { Directive, ElementRef, HostListener, Input, input, Renderer2 } from '@angular/core';
import { DragDropService } from '../services/drag-drop.service';

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective {
  @Input() appDraggable: any;
  private offsetX = 0;
  private offsetY = 0;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private dragDrop: DragDropService
  ) {}

  @HostListener('mousedown', ['$event'])
  onDragStart(event: any): void {
    event.preventDefault();
    console.log(this.appDraggable);
    this.dragDrop.setDraggedItem(this.appDraggable);
    const rect = this.element.nativeElement.getBoundingClientRect();
    this.offsetX = event.clientX - rect.left;
    this.offsetY = event.clientY - rect.top;

    const clone = this.element.nativeElement.cloneNode(true);
    this.renderer.addClass(this.element.nativeElement, 'invisible');
    this.renderer.setStyle(clone, 'position', 'absolute');
    this.renderer.setStyle(clone, 'z-index', '1000');
    this.renderer.setStyle(clone, 'left', event.clientX - this.offsetX + 'px');
    this.renderer.setStyle(clone, 'top', event.clientY - this.offsetY - event.target.clientHeight + 'px');
    this.renderer.setStyle(clone, 'width', event.target?.clientWidth + 'px');
    this.renderer.setStyle(clone, 'height', event.target?.clientHeight + 'px');
    this.renderer.addClass(clone, 'dragged-placeholder');
    document.body.appendChild(clone);

    const moveListener = this.renderer.listen('document', 'mousemove', (moveEvent: MouseEvent) => {
      this.renderer.setStyle(clone, 'left', moveEvent.clientX - this.offsetX + 'px');
      this.renderer.setStyle(clone, 'top', moveEvent.clientY - this.offsetY - event.target?.clientHeight + 'px');
    });

    const upListener = this.renderer.listen('document', 'mouseup', () => {
      moveListener();
      upListener();
      this.renderer.removeChild(document.body, clone);
      this.renderer.removeClass(this.element.nativeElement, 'invisible');
      this.dragDrop.clearDraggedItem();
    });
  }
}
