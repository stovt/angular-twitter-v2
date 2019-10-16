import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetFormComponent } from './tweet-form/tweet-form.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    LoadingSpinnerComponent,
    TweetComponent,
    TweetFormComponent
  ],
  declarations: [LoadingSpinnerComponent, TweetComponent, TweetFormComponent]
})
export class SharedModule {}
