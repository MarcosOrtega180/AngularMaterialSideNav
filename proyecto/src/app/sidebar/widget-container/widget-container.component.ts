import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    OnInit,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {SidebarService} from "../sidebar.service";

@Component({
    selector: 'app-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent implements OnInit {

    @ViewChild('content', { read: ViewContainerRef })
    content: ViewContainerRef;

    @Input() selector: string;
    @Input() settings: any;

    private componentRef: ComponentRef<any>;

    constructor(
        private sidebarService: SidebarService,
        private cfr: ComponentFactoryResolver
    ) {}

    ngOnInit() {
        const type = this.sidebarService.widgets[this.selector];
        if (type) {
            const factory = this.cfr.resolveComponentFactory(type);

            this.content.clear();
            this.componentRef = this.content.createComponent(factory, 0);
        }
    }

    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}
