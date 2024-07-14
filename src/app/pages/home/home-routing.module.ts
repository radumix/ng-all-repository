import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent,
  children: [{ path: 'ngclass', loadChildren: () => import('../ngclass/ngclass.module').then(m => m.NgclassModule) },
    { path: 'ngfor', loadChildren: () => import('../ngfor/ngfor.module').then(m => m.NgforModule) },
    { path: 'ngif', loadChildren: () => import('../ngif/ngif.module').then(m => m.NgifModule) },
    { path: 'ngmodel', loadChildren: () => import('../ngmodel/ngmodel.module').then(m => m.NgmodelModule) },
    { path: 'ngstyle', loadChildren: () => import('../ngstyle/ngstyle.module').then(m => m.NgstyleModule) },
    { path: 'ngswitch', loadChildren: () => import('../ngswitch/ngswitch.module').then(m => m.NgswitchModule) },
    { path: 'attribute', loadChildren: () => import('../attribute/attribute.module').then(m => m.AttributeModule) }]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
