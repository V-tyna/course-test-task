import { ElementRef, Injectable } from '@angular/core';
import Hls from 'hls.js';
import { validateLink } from '../shared/validateLink';

const DUMMY_LINKS = [
  'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8',
  'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
  'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8',
  "https://wisey.app/videos/think-creatively-solve-problems-easily/lesson-5/AppleHLS1/lesson-5.m3u8",
  "https://wisey.app/videos/think-creatively-solve-problems-easily/lesson-3/AppleHLS1/lesson-3.m3u8",
  "https://wisey.app/videos/think-creatively-solve-problems-easily/lesson-4/AppleHLS1/lesson-4.m3u8",
  'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8',
  'http://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_multi_language_subs.m3u8',
];

@Injectable({
  providedIn: 'root'
})

export class VideoService {
  public videoRef?: ElementRef<HTMLVideoElement>;
  public hlsElement?: Hls;
  private videoId!: string;
  private videoLink?: string;

  constructor() { }

  public setVideoId(id: string): void {
    this.videoId = id;
  }

  public getVideoId(): string {
    return this.videoId;
  }

  public setVideoLink(link: string): void {
    this.videoLink = link;
  }

  public getVideoLink(): string | undefined {
    return this.videoLink;
  }

  public runVideoStream(link: string, ref: ElementRef<HTMLVideoElement>, currentTime: number): void {
    validateLink(link).then((res) => {
      if (res) {
        this.playVideo(link, ref, currentTime);
      } else {
        const alternativeLink = this.simulateDifferentLinks();
        this.playVideo(alternativeLink, ref, currentTime);
      }
    });
  }

  public playVideo(videoSrc: string, videoRef: ElementRef<HTMLVideoElement>, currentTime: number) {
    videoRef.nativeElement.id = this.getVideoId();
    this.setVideoLink(videoSrc);
    if (Hls.isSupported() && videoSrc !== undefined) {
      const config = {
        startPosition: currentTime
      }
      const hls = new Hls(config);
      this.hlsElement = hls;
      hls.loadSource(videoSrc);
      hls.attachMedia(videoRef.nativeElement);
    }
  }

  public setVideoDataToLocalStorage(currentTime: number, videoId: string, link: string): void {
    localStorage.setItem(videoId, JSON.stringify({link, currentTime }));
  }

  public simulateDifferentLinks(): string {
    const randomIndex = Math.round(Math.random() * (DUMMY_LINKS.length - 2) + 1);
    return DUMMY_LINKS[randomIndex];
  }
}
