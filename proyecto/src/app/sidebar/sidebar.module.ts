import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarWidget1Component} from './sidebar-widget1/sidebar-widget1.component';
import {SidebarWidget2Component} from './sidebar-widget2/sidebar-widget2.component';
import {SidebarWidget3Component} from './sidebar-widget3/sidebar-widget3.component';
import {MatSidenavModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MatSidenavModule
    ],
    declarations: [
        SidebarWidget1Component,
        SidebarWidget2Component,
        SidebarWidget3Component
    ],
    entryComponents: [
        SidebarWidget1Component,
        SidebarWidget2Component,
        SidebarWidget3Component
    ]
})
export class SidebarModule {
}
