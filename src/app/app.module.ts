import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MenuComponent} from './menu/menu.component';
import {ClothesComponent} from './clothes/clothes.component';
import {SalesComponent} from './sales/sales.component';
import {ContactsComponent} from './contacts/contacts.component';
import {BagsComponent} from './bags/bags.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'clothes', component: ClothesComponent},
    {path: 'sales', component: SalesComponent},
    {path: 'bags', component: BagsComponent},
    {path: 'contacts', component: ContactsComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        SidebarComponent,
        MenuComponent,
        ClothesComponent,
        SalesComponent,
        ContactsComponent,
        BagsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
