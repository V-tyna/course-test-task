import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit, OnDestroy {
  @ViewChild('video', { static: true }) videoRef!: ElementRef<HTMLVideoElement>;
  @Input() public videoId!: string;
  @Input() public videoLink: string | undefined;
  public currentSpeed?: number;

  constructor(private videoService: VideoService) { }

  public ngOnInit(): void {
    // Initially pass videoRef into VideoService
    this.videoService.videoRef = this.videoRef;
    this.currentSpeed = this.videoRef.nativeElement.playbackRate;

    //TODO Renew video stream after surfing different pages
    // My idea is to close pictureInPicture element if current videoRef id equal to pictureInPicture element
    // Basic implementation:
    // If res is true, don't execute initial code after
    // this.checkExistingPictureInPicture().then((res) => {
    //   if (res) {
    //     return;
    //   }
    // });
    // ISSUE to work, pictureInPicture element killed, but audio still playing.

    // Don't allow execute code below if pictureInPicture still in the document
    if (document.pictureInPictureElement) {
      return;
    }

    // Check if there is data in the LocalStorage with timeline for the video
    const videoData = localStorage.getItem(this.videoId);
    if (videoData) {
      const { link, currentTime } = JSON.parse(videoData);
      this.videoService.setVideoLink(link);
      this.videoService.runVideoStream(link, this.videoRef, +currentTime);
      return;
    }

    // Initially play video
    if (this.videoLink) {
      this.videoService.runVideoStream(this.videoLink, this.videoRef, 0);
    }
  }

  public leavePictureInPictureHandler(e: Event): void {
    this.setVideoDataToLocalStorage(e);
  }

  public loadHandler() {
    console.log('load')
  }

  public pauseHandler(e: Event): void {
    this.setVideoDataToLocalStorage(e);
  }

  public async togglePictureInPicture(): Promise<void> {
    try {
      if (this.videoRef.nativeElement !== document.pictureInPictureElement) {
        await this.videoRef.nativeElement.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (e) {
      console.error('Picture in picture error: ', e);
    }
  }

  public speedUpHandler(e: Event): void {
    const ref = <HTMLVideoElement>e.target;
    ref.playbackRate = ref.playbackRate + 0.25;
    this.currentSpeed = ref.playbackRate;
  }

  public speedDownHandler(e: Event): void {
    const ref = <HTMLVideoElement>e.target;
    ref.playbackRate = ref.playbackRate - 0.25;
    this.currentSpeed = ref.playbackRate;
  }

  public ngOnDestroy(): void {
    if (this.videoLink) {
      this.videoService.setVideoDataToLocalStorage(this.videoRef.nativeElement.currentTime, this.videoRef.nativeElement.id, this.videoLink);
    }
    const videoHls = this.videoService.hlsElement;
    videoHls?.destroy();
  }

  private async checkExistingPictureInPicture(): Promise<boolean> {
    if (document.pictureInPictureElement && this.videoService.getVideoId() === document.pictureInPictureElement.getAttribute('id')) {
      await document.exitPictureInPicture();
      document.pictureInPictureElement.remove();
      const link = this.videoService.getVideoLink();
      this.videoService.runVideoStream(link!, this.videoRef, this.videoRef.nativeElement.currentTime);
      return true;
    }
    if (document.pictureInPictureElement) {
      return true;
    }
    return false;
  }

  private setVideoDataToLocalStorage(e: Event) {
    const ref = <HTMLVideoElement>e.target;
    const link = this.videoService.getVideoLink();
    this.videoService.setVideoDataToLocalStorage(ref.currentTime, ref.id, link!);
  }
}
