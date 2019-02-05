import {Injectable, Type} from '@angular/core';
import {SidebarWidget1Component} from "./sidebar-widget1/sidebar-widget1.component";
import {SidebarWidget2Component} from "./sidebar-widget2/sidebar-widget2.component";
import {SidebarWidget3Component} from "./sidebar-widget3/sidebar-widget3.component";

@Injectable({
    providedIn: 'root'
})
export class SidebarService {

    widgets: { [id: string]: Type<{}> } = {
        'app-sidebar-widget1': SidebarWidget1Component,
        'app-sidebar-widget2': SidebarWidget2Component,
        'app-sidebar-widget3': SidebarWidget3Component
    };


}
