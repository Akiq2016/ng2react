import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component, Input, OnInit, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'react-component',
  template: '<div [id]="id">wrapper</div>'
})
export class ReactComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() public component: any
  @Input() public props: Object
  public id: number
  private drawNode: any

  ngOnChanges () {
    if (this.drawNode) this.render()
  }
  ngOnInit () {
    this.id = Math.floor(Math.random() * 9999999)
  }
  ngAfterViewInit () {
    this.drawNode = document.getElementById(this.id.toString())
    this.render()
  }
  render () {
    ReactDOM.render(React.createElement(this.component, this.props), this.drawNode)
  }
}