import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportsComponent } from './reports/reports.component';
import { TablesComponent } from './tables/tables.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { UserAnalysisComponent } from './user-analysis/user-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ReportsComponent,
    TablesComponent,
    AnalysisComponent,
    UserAnalysisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
