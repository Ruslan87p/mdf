import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild({}),
    RouterModule.forChild(
      [
        {
          path: '',
          component: CardComponent,
        },
      ]
    ),
  ],
  declarations: [CardComponent],
  providers: [PostsService]
})
export class SceneModule {}
