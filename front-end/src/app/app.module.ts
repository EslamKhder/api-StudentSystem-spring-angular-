import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componants/header/header.component';
import { FooterComponent } from './componants/footer/footer.component';
import { RegiserComponent } from './componants/regiser/regiser.component';
import { StudentsComponent } from './componants/students/students.component';
import { OptionsComponent } from './componants/options/options.component';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouteActivatedService} from './services/route-activated-service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContentComponent } from './componants/content/content.component';
import {LoginActivatedService} from './services/login-activated.service';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpIntercepterBaseAuthServiceService} from "./services/http/http-intercepter-base-auth-service.service";
import {multicast} from "rxjs/operators";

const routes: Routes = [
  {path: 'register', component: RegiserComponent,canActivate: [LoginActivatedService]},
  {path: 'content', component: ContentComponent, canActivate: [LoginActivatedService]},
  {path: 'control', component: OptionsComponent,canActivate: [RouteActivatedService]},
  {path: 'control/:id', component: OptionsComponent,canActivate: [RouteActivatedService]},
  {path: 'students', component: StudentsComponent,canActivate: [RouteActivatedService]},
  {path: 'students/:name', component: StudentsComponent,canActivate: [RouteActivatedService]},
  {path: '', component: StudentsComponent,canActivate: [RouteActivatedService]},
  {path: '**', component: StudentsComponent,canActivate: [RouteActivatedService]},

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegiserComponent,
    StudentsComponent,
    OptionsComponent,
    ContentComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbPaginationModule

    ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: HttpIntercepterBaseAuthServiceService,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
