import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component, Input } from '@angular/core';

@Component({
    selector: 'react-component',
    template: '<div [id]="id">wrapper</div>'
})
export class ReactComponent {
    @Input() public component: any;
    @Input() public props: Object;
    id: number;
    drawNode: any;
    ngOnInit() {
        this.id = Math.floor(Math.random() * 9999999);
    }
    ngAfterViewInit() {
        this.drawNode = document.getElementById(this.id.toString());
		this.render();
    }
    ngOnChanges() {
        if (this.drawNode) {
			this.render();
        }
    }
    render() {
        // NOT SURE：
        // React.render(React.createElement(this.component, this.props), this.drawNode);
		ReactDOM.render(React.createElement(this.component, this.props), this.drawNode);
    }
}
