import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, MatExpansionModule
} from "@angular/material";

import {MainNavComponent} from './main-nav/main-nav.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './main/main.component';
import {LayoutModule} from '@angular/cdk/layout';
import {SideContentComponent} from './side-content/side-content.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { WidgetContainerComponent } from './sidebar/widget-container/widget-container.component';
import {NgMaterialMultilevelMenuModule} from "ng-material-multilevel-menu";

@NgModule({
    declarations: [
        AppComponent,

        MainNavComponent,
        MainComponent,
        SideContentComponent,
        WidgetContainerComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        NgMaterialMultilevelMenuModule,
        AppRoutingModule,

        SidebarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
