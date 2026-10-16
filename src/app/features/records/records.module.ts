import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { RecordsComponent } from './records.component';

@NgModule({ declarations: [RecordsComponent], imports: [CommonModule, ReactiveFormsModule, SharedComponentsModule], exports: [RecordsComponent] })
export class RecordsModule {}
