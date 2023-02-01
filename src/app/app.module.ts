import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LiveStreamComponent } from './components/live-stream/live-stream.component';
import { VideoStreamComponent } from './components/video-stream/video-stream.component';
import { LiveChatComponent } from './components/live-chat/live-chat.component';
import { LiveClassComponent } from './components/live-class/live-class.component';
import { HomeDynamicComponent } from './components/home-dynamic/home-dynamic.component';
import { ProfileTeacherComponent } from './components/profile-teacher/profile-teacher.component';
import { ProfileStudentComponent } from './components/profile-student/profile-student.component';
import { WallComponent } from './components/wall/wall.component';
import { PostComponent } from './components/post/post.component';
import { PosterComponent } from './components/poster/poster.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ProfileComponent } from './components/profile/profile.component';
import { PostProfileComponent } from './components/post-profile/post-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LiveStreamComponent,
    VideoStreamComponent,
    LiveChatComponent,
    LiveClassComponent,
    HomeDynamicComponent,
    ProfileTeacherComponent,
    ProfileStudentComponent,
    WallComponent,
    PostComponent,
    PosterComponent,
    ProfileComponent,
    PostProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
