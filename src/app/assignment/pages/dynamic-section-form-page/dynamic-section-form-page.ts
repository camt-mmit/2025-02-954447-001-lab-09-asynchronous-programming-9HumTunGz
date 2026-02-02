import { Component } from '@angular/core';
import { DynamicSectionFormComponent } from '../../components/dynamic-section-form/dynamic-section-form';

@Component({
  standalone: true,
  imports: [DynamicSectionFormComponent],
  template: `<app-dynamic-section-form></app-dynamic-section-form>`,
})
export class DynamicSectionFormPage {}
