import { NgModule } from '@angular/core';
import { UvUiLibComponent } from './uv-ui-lib.component';

import { NavbarDarkComponent } from './components/navbar-dark/navbar-dark.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderSbsComponent } from './components/header-sbs/header-sbs.component';
import { HeaderSbsSubComponent } from './components/header-sbs-sub/header-sbs-sub.component';



@NgModule({
  declarations: [
    UvUiLibComponent,
    NavbarDarkComponent,
    HeaderComponent,
    SearchBoxComponent,
    LoginComponent,
    HeaderSbsComponent,
    HeaderSbsSubComponent],
  imports: [
  ],
  exports: [
    UvUiLibComponent,
    NavbarDarkComponent,
    HeaderComponent,
    SearchBoxComponent,
    LoginComponent,
    HeaderSbsComponent,
    HeaderSbsSubComponent
  ]
})
export class UvUiLibModule { }
