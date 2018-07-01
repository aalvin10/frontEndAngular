import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { GraficoComponent } from './grafico/grafico.component';
import { HomeComponent } from './home/home.component';
import { TabelaComponent } from './tabela/tabela.component';

import {ROUTES} from './app.routes'
import { DataService } from './data.service';
import { ConstrucaoComponent } from './construcao/construcao.component';


@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent,
    HomeComponent,
    TabelaComponent,
    ConstrucaoComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
