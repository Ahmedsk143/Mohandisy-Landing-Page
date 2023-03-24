import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ServiceProviderProfileComponent } from './pages/service-provider-profile/service-provider-profile.component';
import { ServiceProvidersComponent } from './pages/service-providers/service-providers.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
  },
  {
    path: 'ourServices',
    component: OurServicesComponent,
  },
  {
    path: 'serviceProviders',
    component: ServiceProvidersComponent,
  },
  {
    path: 'serviceProviders/:id',
    component: ServiceProviderProfileComponent,
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
