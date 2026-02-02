import { Injectable, signal } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { DynamicSection } from '../types';

@Injectable({ providedIn: 'root' })
export class DynamicSectionDataStorage {
  private _data = signal<DynamicSection>([]);

  loadData(): Observable<DynamicSection> {
    return of(this._data()).pipe(delay(500));
  }

  saveData(newData: DynamicSection): Observable<void> {
    return of(undefined).pipe(
      delay(500),
      tap(() => this._data.set(newData)),
    );
  }
}
