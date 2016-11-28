import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{name}} and {{myArr}} and {{fname}}</h1>'
})

export class AppComponent {
fname:string;
    name="Riyaz",
    myArr=["html", "javascript", "css"];
    constructor(){
        this.fname="Pasha"

    }
}
