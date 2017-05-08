import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import '@angular/platform-browser';
import 'rxjs';
require("file-loader?name=heroes.json!./app/heroes/heroes.json");
require("file-loader?name=crisiscenter.json!./app/crisis-center/crisiscenter.json");