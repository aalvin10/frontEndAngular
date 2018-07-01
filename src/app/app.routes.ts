import {Routes} from '@angular/router'
import {GraficoComponent} from './grafico/grafico.component'
import {TabelaComponent} from './tabela/tabela.component'
import {HomeComponent} from './home/home.component'
import { ConstrucaoComponent } from './construcao/construcao.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'grafico', component: GraficoComponent},
    {path: 'tabela', component: TabelaComponent},
    {path: 'construcao', component: ConstrucaoComponent},
]
 
 