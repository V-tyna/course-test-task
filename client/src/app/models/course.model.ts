export interface Course {
  id: string,
  title: string,
  tags: string[],
  launchDate: Date | string,
  status: string,
  description: string,
  duration: number,
  lessonsCount: number,
  containsLockedLessons: boolean,
  previewImageLink: string,
  rating: number,
  meta: CourseMeta
}

export interface CourseMeta {
  slug: string,
  skills: string[],
  courseVideoPreview: {
    link: string,
    duration: number,
    previewImageLink: string,
  }
}
