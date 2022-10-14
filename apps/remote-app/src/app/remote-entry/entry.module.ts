import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        // component: RemoteEntryComponent,
        loadChildren: () =>
          import('../../../../../libs/scene/src/index').then(
            (m) => m.SceneModule
          ),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
