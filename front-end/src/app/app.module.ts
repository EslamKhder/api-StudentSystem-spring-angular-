import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componants/header/header.component';
import { FooterComponent } from './componants/footer/footer.component';
import { RegiserComponent } from './componants/regiser/regiser.component';
import { StudentsComponent } from './componants/students/students.component';
import { OptionsComponent } from './componants/options/options.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'register', component: RegiserComponent},
  {path: 'control', component: OptionsComponent},
  {path: 'students', component: StudentsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegiserComponent,
    StudentsComponent,
    OptionsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
