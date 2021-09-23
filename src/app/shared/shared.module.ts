import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirectiveDirective } from './directives/highlight-directive.directive';



@NgModule({
  declarations: [
    HighlightDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirectiveDirective]
})
export class SharedModule { }
