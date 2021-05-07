import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultsComponent } from './defaults/defaults.component';
import { FormCustomComponent } from './form-custom/form-custom.component';
import { FormDividerComponent } from './form-divider/form-divider.component';
import { FormGridComponent } from './form-grid/form-grid.component';
import { FormInputComponent } from './form-input/form-input.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path: 'form-grid',
  component: FormGridComponent
  },
  {
  path: 'form-input',
  component: FormInputComponent
  },
  {
  path: 'form-custom',
  component: FormCustomComponent
  },
  {
  path: 'form-divider',
  component: FormDividerComponent
  },
  {
  path: 'defaults',
  component: DefaultsComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
