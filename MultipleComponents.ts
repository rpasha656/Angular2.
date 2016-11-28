import {Component,viewEncapsulation} from 'angular2/core';
import {myMovies} from './myMovies';
import {ViewEncapsulation} from "angular2/src/core/metadata/view";

@Component({
    selector: 'my-app',
    template: '<h1>Welcome to my Shop</h1><myMovies></myMovies>'
    directives:[myMovies]
    styles: [
        'h1 {text-align: center;}'

    ],
    encapsulation: ViewEncapsulation.None,
    encapsulation: ViewEncapsulation.Native,
    encapsulation: ViewEncapsulation.Emulated,
})

export class myShop {


}