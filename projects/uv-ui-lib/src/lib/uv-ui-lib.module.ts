import { NgModule } from '@angular/core';
import { UvUiLibComponent } from './uv-ui-lib.component';
import { NavbarDarkComponent } from './components/navbar-dark/navbar-dark.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [UvUiLibComponent, NavbarDarkComponent, HeaderComponent, SearchBoxComponent],
  imports: [
  ],
  exports: [UvUiLibComponent, NavbarDarkComponent, HeaderComponent, SearchBoxComponent]
})
export class UvUiLibModule { }
