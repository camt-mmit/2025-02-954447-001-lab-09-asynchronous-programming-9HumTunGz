import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DynamicSectionDataStorage } from '../../services/dynamic-section-data.storage';

@Component({
  selector: 'app-dynamic-section-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-section-form.html',
})
export class DynamicSectionFormComponent {
  private fb = inject(FormBuilder);
  private storage = inject(DynamicSectionDataStorage);

  form = this.fb.group({
    sections: this.fb.array([]),
  });

  get sections() {
    return this.form.get('sections') as FormArray;
  }

  addSection() {
    this.sections.push(
      this.fb.group({
        numbers: this.fb.array([this.fb.control(0)]),
      }),
    );
  }

  getNumbers(sIdx: number) {
    return this.sections.at(sIdx).get('numbers') as FormArray;
  }
  addNumber(sIdx: number) {
    this.getNumbers(sIdx).push(this.fb.control(0));
  }
  removeNumber(sIdx: number, nIdx: number) {
    this.getNumbers(sIdx).removeAt(nIdx);
  }
  removeSection(sIdx: number) {
    this.sections.removeAt(sIdx);
  }

  calcSum(sIdx: number): number {
    const vals = this.getNumbers(sIdx).value as number[];
    return vals.reduce((a, b) => a + (Number(b) || 0), 0);
  }

  onSave() {
    const data = this.form.getRawValue().sections.map((s: any) => s.numbers);
    this.storage.saveData(data).subscribe(() => alert('Saved!'));
  }
}
