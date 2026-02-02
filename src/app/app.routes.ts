import { Routes } from '@angular/router';

// ฝั่ง Assignment (เช็คชื่อไฟล์และ Path ให้เป๊ะตาม Explorer)
import { AssignmentRootPage } from './assignment/pages/assignment-root/assignment-root-page';
import { DynamicSectionFormPage } from './assignment/pages/dynamic-section-form-page/dynamic-section-form-page';
import { DynamicSectionViewPage } from './assignment/pages/dynamic-section-view-page/dynamic-section-view-page';

// ฝั่ง Profile (ต้องมี /profile/ ตามโครงสร้างซ้ายมือของคุณ)
import { ProfileFormPage } from './profile/pages/profile-form-page/profile-form-page';
import { ProfileRoot } from './profile/pages/profile-root/profile-root';
import { ProfileViewPage } from './profile/pages/profile-view-page/profile-view-page';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileRoot,
    children: [
      { path: 'view', component: ProfileViewPage },
      { path: 'form', component: ProfileFormPage },
      { path: '', redirectTo: 'view', pathMatch: 'full' },
    ],
  },
  {
    path: 'assignment',
    component: AssignmentRootPage,
    children: [
      { path: 'view', component: DynamicSectionViewPage },
      { path: 'form', component: DynamicSectionFormPage },
      { path: '', redirectTo: 'view', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'assignment', pathMatch: 'full' },
];
