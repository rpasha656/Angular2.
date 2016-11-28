import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Display List of movies</h1>' +
    '<div *ngIf="xyz==true">Ur not allowed to watch this movies</div>'
})

export class ngIf {
xyz=true

}