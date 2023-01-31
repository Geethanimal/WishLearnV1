import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LiveStreamComponent } from './components/live-stream/live-stream.component';
import { VideoStreamComponent } from './components/video-stream/video-stream.component';
import { LiveChatComponent } from './components/live-chat/live-chat.component';
import { LiveClassComponent } from './components/live-class/live-class.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LiveStreamComponent,
    VideoStreamComponent,
    LiveChatComponent,
    LiveClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
