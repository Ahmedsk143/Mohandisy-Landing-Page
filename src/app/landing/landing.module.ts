import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ServiceProviderComponent } from './shared/components/service-provider/service-provider.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { OurWorkComponent } from './shared/components/our-work/our-work.component';
import { UserReviewsComponent } from './shared/components/user-reviews/user-reviews.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServiceProvidersComponent } from './pages/service-providers/service-providers.component';
import { ServiceProviderProfileComponent } from './pages/service-provider-profile/service-provider-profile.component';
import { VisionComponent } from './pages/about-us/vision/vision.component';
import { GoalsComponent } from './pages/about-us/goals/goals.component';
import { ExperienceComponent } from './pages/about-us/experience/experience.component';
import { BrandsComponent } from './shared/components/brands/brands.component';
import { ReviewCardComponent } from './shared/components/review-card/review-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactFormComponent } from './shared/components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceCardComponent } from './shared/components/service-card/service-card.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { HowWeWorkComponent } from './shared/components/how-we-work/how-we-work.component';
import { VerticalTabsComponent } from './shared/components/vertical-tabs/vertical-tabs.component';
import { HorizontalTabsComponent } from './shared/components/horizontal-tabs/horizontal-tabs.component';
import { SprovidersWorkComponent } from './shared/components/sproviders-work/sproviders-work.component';
import { SproviderCardComponent } from './shared/components/sprovider-card/sprovider-card.component';
import { SpProfileCardComponent } from './pages/service-provider-profile/sp-profile-card/sp-profile-card.component';

import { MatDialogModule } from '@angular/material/dialog';
import { SearchDialogComponent } from './shared/components/search-dialog/search-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    HeaderComponent,
    ServiceProviderComponent,
    OurServicesComponent,
    OurWorkComponent,
    UserReviewsComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServiceProvidersComponent,
    ServiceProviderProfileComponent,
    VisionComponent,
    GoalsComponent,
    ExperienceComponent,
    BrandsComponent,
    ReviewCardComponent,
    ContactFormComponent,
    ServiceCardComponent,
    ServicesComponent,
    HowWeWorkComponent,
    VerticalTabsComponent,
    HorizontalTabsComponent,
    SprovidersWorkComponent,
    SproviderCardComponent,
    SpProfileCardComponent,
    SearchDialogComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    MatDialogModule,
    TranslateModule,
  ],
})
export class LandingModule {}
