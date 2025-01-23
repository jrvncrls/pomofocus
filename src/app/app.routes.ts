import { Routes } from '@angular/router';
import { BreakComponent } from './break/break.component';
import { FocusComponent } from './focus/focus.component';

export const routes: Routes = [
  { path: '', component: FocusComponent },
  { path: 'break', component: BreakComponent },
];
