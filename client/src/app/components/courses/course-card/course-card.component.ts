import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @ViewChild('cardVideo', { static: false }) videoRef!: ElementRef<HTMLVideoElement>;
  @Input() public course!: Course;
  public isPlayingVideo = false;

  constructor(private videoService: VideoService) { }

  public playVideoHandler(): void {
    this.isPlayingVideo = true;
    // Link from API, if you don't have CORS Error, uncomment this line:
    // const link = this.course.meta.courseVideoPreview.link;
    // Links changed:
    const link = this.videoService.simulateDifferentLinks();
    this.videoRef.nativeElement.muted = true;
    this.videoRef.nativeElement.autoplay = true;
    this.videoService.playVideo(link, this.videoRef, 0);
  }

  public pauseVideoHandler(): void {
    this.isPlayingVideo = false;
    this.videoRef.nativeElement.pause();
    const videoHls = this.videoService.hlsElement;
    videoHls?.destroy();
  }

  public clickHandler(): void {
    this.videoRef.nativeElement.pause();
    const videoHls = this.videoService.hlsElement;
    videoHls?.destroy();
  }
}
