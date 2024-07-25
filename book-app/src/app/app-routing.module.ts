import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookListComponent } from './book-list/book-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportsComponent } from './reports/reports.component';
import { TablesComponent } from './tables/tables.component';
import { confirmationGuard } from './confirmation.guard';
import { childAuthGuard } from './child-auth.guard';
import { AnalysisComponent } from './analysis/analysis.component';
import { UserAnalysisComponent } from './user-analysis/user-analysis.component';
import { matchAuthGuard } from './match-auth.guard';

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent,
    canActivateChild: [childAuthGuard],
    children: [
      {
        path: "reports", // localhost:4200/dashboard/reports
        component: ReportsComponent,
      },
      {
        path: "table",
        component: TablesComponent
      }
    ]
  },
  {path: "analysis", component: AnalysisComponent, canMatch: [matchAuthGuard]},
  {path: "analysis", component: UserAnalysisComponent},
  {path: "book-list", component: BookListComponent, canActivate: [authGuard]},
  {path: "register", component: RegisterComponent, canDeactivate: [confirmationGuard]},
  {path: "login", component: LoginComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
