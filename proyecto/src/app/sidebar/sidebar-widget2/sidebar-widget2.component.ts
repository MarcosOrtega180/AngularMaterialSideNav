import {Component, OnInit} from '@angular/core';
import {htmlAstToRender3Ast} from "@angular/compiler/src/render3/r3_template_transform";


@Component({
    selector: 'app-sidebar-widget2',
    templateUrl: './sidebar-widget2.component.html',
    styleUrls: ['./sidebar-widget2.component.css']
})
export class SidebarWidget2Component implements OnInit {

    videoList = [
        {
            'id': 1,
            'type': 'panel',
            'title': 'Lower Extremities',
            'nodes': [
                {
                    'id': 11,
                    'title': 'Second node',
                    'nodes': "[]"
                },
                {
                    'id': 12,
                    'title': 'Second node',
                    'nodes2': [
                        {
                            'id': 11,
                            'title': 'Tercer nivel',
                            'nodes': "[]"
                        },
                        {
                            'id': 12,
                            'title': 'Second node',
                            'nodes': "[]"
                        }
                    ]
                }
            ]
        },
        {
            'id': 2,
            'type':'item',
            'title': 'Second node',
            'nodes': []
        },
        {
            'id': 3,
            'type':'item',
            'title': 'third node',
            'nodes': []
        }
    ];



    constructor() {
    }

    ngOnInit() {


    }

}
