import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  @Input() name!: string;

  @Input() description!: string;

  @Input() price!: number;

  @Input() category!: string;

  @Input() isAvailable!: boolean;

  @Input() imageUrl!: string;

  constructor() { }

}
