import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { MainComponent } from "app/dashboard/main/main.component";
import { AuthGuard } from "app/core/authguard.service";
import { LoginComponent } from "app/login/login.component";


export const router: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },



    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'main', pathMatch: 'prefix' },
            { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
        ]
    },


    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: false });

