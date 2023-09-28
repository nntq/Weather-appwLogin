import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'


const appRoutes: Routes = [
  {path: 'login', loadChildren: () => loadRemoteModule({
    type: 'manifest',
    remoteName: 'login',
    exposedModule: './Login',
  }).then(m=>{console.log(m); return m.LoginModule}) 
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
