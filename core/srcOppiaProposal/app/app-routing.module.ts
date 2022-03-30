import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutFoundationPageComponent } from './pages/about-foundation-page/about-foundation-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AnimationComponent } from './pages/animation-testing/animation';
import { ErrorPage } from './pages/error/error-404.component';
const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'animation',
    component: AnimationComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-foundation',
    component: AboutFoundationPageComponent
  },
  {
    path: 'not-found',
    component: ErrorPage
  },
  {
    path: 'terms',
    loadChildren: () => import('pages/terms-page/terms-page.module')
      .then(m => m.TermsPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
