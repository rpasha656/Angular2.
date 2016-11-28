import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {eventComponent} from './Event';
import {myShop} from './MultipleComponents';
import {ngIf} from './ngIf';


bootstrap(AppComponent);
bootstrap(eventComponent);
bootstrap(myShop);
bootstrap(ngIf);

