import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from "@angular/router";
import { FooterComponent } from './views/footer/footer.component';
import { TopnavbarComponent } from './views/topnavbar/topnavbar.component';
import { NavigationComponent } from './views/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DashboardComponent, MainComponent, FooterComponent, TopnavbarComponent, NavigationComponent]
})
export class DashboardModule { }
