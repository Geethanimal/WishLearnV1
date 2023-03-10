import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LiveChatComponent } from './components/live-chat/live-chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VideoStreamComponent } from './components/video-stream/video-stream.component';
import { HomeDynamicComponent } from './components/home-dynamic/home-dynamic.component';
import { LiveStreamComponent } from './components/live-stream/live-stream.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostProfileComponent } from './components/post-profile/post-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'live-chat', component: LiveChatComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'video-stream', component: VideoStreamComponent },
  { path: 'home-dynamic', component: HomeDynamicComponent },
  { path: 'live-stream', component: HomeDynamicComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile-wall', component: PostProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
