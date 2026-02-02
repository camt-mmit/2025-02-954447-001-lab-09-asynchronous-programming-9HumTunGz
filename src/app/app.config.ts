import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // ไฟล์ routes ที่เราแก้ขีดแดงไป

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
