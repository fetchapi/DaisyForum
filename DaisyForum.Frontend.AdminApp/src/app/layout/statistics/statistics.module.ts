import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonthlyNewMembersComponent } from './monthly-new-members/monthly-new-members.component';
import { MonthlyNewKbsComponent } from './monthly-new-knowledge-bases/monthly-new-knowledge-bases.component';
import { MonthlyNewCommentsComponent } from './monthly-new-comments/monthly-new-comments.component';
import { StatisticsRoutingModule } from './statistics-routing.module';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BlockUIModule } from 'primeng/blockui';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [MonthlyNewMembersComponent, MonthlyNewKbsComponent, MonthlyNewCommentsComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    PanelModule,
    ButtonModule,
    TableModule,
    BlockUIModule,
    InputTextModule,
    ProgressSpinnerModule,
    FormsModule,
    ChartModule
  ],
  exports: [MonthlyNewMembersComponent, MonthlyNewCommentsComponent, MonthlyNewKbsComponent]
})
export class StatisticsModule { }
