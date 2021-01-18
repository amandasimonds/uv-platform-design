import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UvUiLibModule } from 'uv-ui-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarDarkComponent } from './data-clustering/navbar-dark/navbar-dark.component';
import { HeaderComponent } from './data-clustering/header/header.component';
import { SubHeaderComponent } from './data-clustering/sub-header/sub-header.component';
import { BackButtonComponent } from './UI/back-button/back-button.component';
import { ContentLeftComponent } from './data-clustering/content-left/content-left.component';
import { DataClusteringComponent } from './data-clustering/data-clustering.component';
import { LoginComponent } from './login/login.component';
import { StartPageComponent } from './uv-viewer/start-page/start-page.component';
import { UvViewerHeaderComponent } from './uv-viewer/uv-viewer-header/uv-viewer-header.component';
import { SearchBarComponent } from './uv-viewer/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDarkComponent,
    HeaderComponent,
    SubHeaderComponent,
    BackButtonComponent,
    ContentLeftComponent,
    DataClusteringComponent,
    LoginComponent,
    StartPageComponent,
    UvViewerHeaderComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UvUiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
