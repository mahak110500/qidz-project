import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { FamilySecComponent } from './family-sec/family-sec.component';
import { HomeAdSecComponent } from './home-ad-sec/home-ad-sec.component';
import { BrowseCategoryComponent } from './browse-category/browse-category.component';
import { BlogComponent } from './blog/blog.component';
import { BannerEventComponent } from './event-details/banner/banner.component';

import { TryNewComponent } from './try-new/try-new.component';
import { GetInspirationComponent } from './get-inspiration/get-inspiration.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AdBannerComponent } from './event-details/ad-banner/ad-banner.component';
import { ActivitySectionComponent } from './event-details/activity-section/activity-section.component';
import { ActivityDescriptionComponent } from './event-details/activity-description/activity-description.component';
import { ReviewsComponent } from './event-details/reviews/reviews.component';
import { ShareWidgetComponent } from './event-details/share-widget/share-widget.component';
import { EventContentComponent } from './event-details/event-content/event-content.component';
import { HomeSectionComponent } from './event-details/home-section/home-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    DownloadAppComponent,
    FamilySecComponent,
    HomeAdSecComponent,
    BrowseCategoryComponent,
    BlogComponent,
    TryNewComponent,
    GetInspirationComponent,
    AdvertisementComponent,
    EventDetailsComponent,
    BannerEventComponent,
    AdBannerComponent,
    ActivitySectionComponent,
    ActivityDescriptionComponent,
    ReviewsComponent,
    ShareWidgetComponent,
    EventContentComponent,
    HomeSectionComponent,
   
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
