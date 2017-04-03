import "reflect-metadata"; 
import 'core-js';
import "zone.js/dist/zone";

import "materialize-css";
import "angular2-materialize";


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);