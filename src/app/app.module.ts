import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { UvUiLibModule } from 'uv-ui-lib';
import { UvUiLibModule } from "../../projects/uv-ui-lib/src/lib/uv-ui-lib.module"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarDarkComponent } from './data-clustering/navbar-dark/navbar-dark.component';
import { HeaderComponent } from './data-clustering/header/header.component';
import { SubHeaderComponent } from './data-clustering/sub-header/sub-header.component';
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
})
export class AppModule { }
