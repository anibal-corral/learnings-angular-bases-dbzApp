import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { CharacterComponent } from './pages/character/character.component';
import { HomeComponent } from './pages/home/home.component';

const routes:Routes=[
  {
  path:'home',
  component:HomeComponent,
  children:[
{path:'list', component:ListComponent},
{path:'add', component:AddComponent},
{path:'add/:id', component:AddComponent},
{path:'search', component:SearchComponent},
{path:':id', component:CharacterComponent},
{path:'**', redirectTo:'list'},

  ]
  },
  
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DbzRoutingModule { }
