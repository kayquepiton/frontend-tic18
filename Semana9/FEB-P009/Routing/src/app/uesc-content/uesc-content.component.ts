import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-uesc-content',
  templateUrl: './uesc-content.component.html',
  styleUrls: ['./uesc-content.component.css'],
})
export class UescContentComponent {
  @Input() items: any[] = [];
}
