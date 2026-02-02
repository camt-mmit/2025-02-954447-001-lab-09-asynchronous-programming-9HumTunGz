import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DynamicSectionDataStorage } from '../../services/dynamic-section-data.storage';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../../components/dynamic-section-view/dynamic-section-view.html',
})
export class DynamicSectionViewPage {
  data$ = inject(DynamicSectionDataStorage).loadData();

  getSum(section: readonly number[]): number {
    return section.reduce((a, b) => a + (b || 0), 0);
  }
}
