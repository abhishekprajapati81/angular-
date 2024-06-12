import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './componant/show/show.component';
import { AddComponent } from './componant/add/add.component';
import { EditComponent } from './componant/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: ShowComponent,
  },
  { path: 'add', component: AddComponent },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
