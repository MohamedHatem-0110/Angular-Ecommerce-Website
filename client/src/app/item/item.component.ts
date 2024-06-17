import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() itemPrice: number = 120;
  @Input() numYellowStars: number = 2;
  @Input() itemName: string = 'Item Name';
  @Input() imgSource: string = '';
}
