import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-side-content',
    templateUrl: './side-content.component.html',
    styleUrls: ['./side-content.component.css']
})
export class SideContentComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    config = {
        panels: [
            {
                name: 'Section 1', description: 'First section',
                component: {
                    selector: 'app-sidebar-widget1',
                    settings: {}
                }
            },
            {name: 'Section 2', description: 'Second section',
                component: {
                    selector: 'app-sidebar-widget2',
                    settings: {}
                }},
            {name: 'Section 3', description: 'Third section',
                component: {
                    selector: 'app-sidebar-widget3',
                    settings: {}
                }}
        ]
    };
}
