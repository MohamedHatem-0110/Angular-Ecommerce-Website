import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-body-titles',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './body-titles.component.html',
  styleUrl: './body-titles.component.css',
})
export class BodyTitlesComponent {
  @Input() smallTitle: string = '';
  @Input() bigTitle: string = '';
}
