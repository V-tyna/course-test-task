import { CourseDetail } from '../models/lesson.model';

export const mockLessonDetailsData: CourseDetail = {
  "id": "352be3c6-848b-4c19-9e7d-54fe68fef183",
  "title": "Lack of Motivation & How to Overcome It",
  "tags": [
    "productivity"
  ],
  "launchDate": "2023-03-06T16:50:06.000Z",
  "status": "launched",
  "description": "Reignite your inner drive by managing factors that dampen your motivation.",
  "duration": 521,
  "previewImageLink": "https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it",
  "rating": 3.5,
  "meta": {
    "slug": "lack-of-motivation-how-to-overcome-it",
    "skills": [
      "Aligning your goals with your motives",
      "Overcoming decision paralysis",
      "Reframing negative self-talk",
      "Gaining clarity",
      "Challenging yourself"
    ],
    "courseVideoPreview": {
      "link": "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8",
      "duration": 27,
      "previewImageLink": "https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview"
    }
  },
  "lessons": [
    {
      "id": "278e5a0e-8df1-4646-9984-10289d52dc2d",
      "title": "Why we lack motivation",
      "duration": 255,
      "order": 1,
      "type": "video",
      "status": "unlocked",
      "link": "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8",
      "previewImageLink": "https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-1",
      "meta": null
    }
  ],
  "containsLockedLessons": true
};

export const RANDOM_NUMBER_OF_SECONDS = 343;
export const INITIAL_TIME_MARKER = 0;
