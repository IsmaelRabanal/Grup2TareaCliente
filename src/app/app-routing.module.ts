import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

const routes: Routes = [
  {
    path: 'lista-tareas',
    pathMatch: 'full',
    component: ListaTareasComponent,
  },
  {
    path: '',
    redirectTo: 'lista-tareas',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
