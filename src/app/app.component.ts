import { Component, OnInit } from '@angular/core';
import './angular-material.layout-attributes.css';
import './styles.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
