import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecordsModule } from './features/records/records.module';

@NgModule({ declarations: [AppComponent], imports: [BrowserModule, RecordsModule], bootstrap: [AppComponent] })
export class AppModule {}
