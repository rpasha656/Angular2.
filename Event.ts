import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<button (click)="clickEvent()"> I was Clicked {{times}} times</button>'
})

export class eventComponent {
    times=0;
    clickEvent(){

        this.times++;
    }

}