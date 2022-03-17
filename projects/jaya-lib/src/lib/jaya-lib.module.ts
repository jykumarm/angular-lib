import { NgModule } from '@angular/core';
import { JayaLibComponent } from './jaya-lib.component';
import { JayaLogoComponent } from './components/jaya-logo/jaya-logo.component';



@NgModule({
  declarations: [
    JayaLibComponent,
    JayaLogoComponent
  ],
  imports: [
  ],
  exports: [
    JayaLibComponent
  ]
})
export class JayaLibModule { }
