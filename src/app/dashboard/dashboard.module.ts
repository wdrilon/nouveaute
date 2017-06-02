import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from "@angular/router";
import { FooterComponent } from './views/footer/footer.component';
import { TopnavbarComponent } from './views/topnavbar/topnavbar.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { ChartsModule } from "ng2-charts";
import { CalendarModule } from "ap-angular2-fullcalendar";

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule,
    CalendarModule
  ],
  declarations: [DashboardComponent, MainComponent, FooterComponent, TopnavbarComponent, NavigationComponent]
})
export class DashboardModule { }
