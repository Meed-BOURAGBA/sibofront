import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// import ngx-translate and the http loader
//import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
//import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserModule } from './user/user.module';
import { ReactiveFormsModule } from '@angular/forms';

// required for AOT compilation
//export const createTranslateLoeader = (http: HttpClient) => {
  //return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
//} 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
    UserModule,
     // ngx-translate and the loader module
     HttpClientModule
   //  TranslateModule.forRoot({
    //     loader: {
      //       provide: TranslateLoader,
        //     useFactory: createTranslateLoeader,
          //   deps: [HttpClient] 
         //}
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

