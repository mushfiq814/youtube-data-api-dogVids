import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';


const routes: Routes = [
  { path: '', component: VideosComponent },
  { path: 'video/:videoId', component: VideoPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }