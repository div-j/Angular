import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// other imports...

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  
    // other components...
  ],
  imports: [
    HttpClientModule,
    // other modules...
  ],
  exports: [HttpClientModule],
})
export class ShareModule {}
