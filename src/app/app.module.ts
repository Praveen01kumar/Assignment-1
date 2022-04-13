import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from "@angular/forms";
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Components/cradencial/sign-up/sign-up.component';
import { LogInComponent } from './Components/cradencial/log-in/log-in.component';
import { UpdateUserComponent } from './Components/cradencial/update-user/update-user.component';
import { PorgotPasswordComponent } from './Components/cradencial/porgot-password/porgot-password.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { BlogComponent } from './Components/pages/blog/blog.component';
import { ContactUsComponent } from './Components/pages/contact-us/contact-us.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReadMoreComponent } from './Components/pages/blog/read-more/read-more.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    UpdateUserComponent,
    PorgotPasswordComponent,
    HomeComponent,
    BlogComponent,
    ContactUsComponent,
    NavBarComponent,
    ReadMoreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    LayoutModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
