import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KnowComponent } from './know';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        KnowComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [ appRoutingProviders ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
