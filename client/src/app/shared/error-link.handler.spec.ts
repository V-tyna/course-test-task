import { errorLinkHandler } from './error-link.handler';

describe('errorLinkHandler', () => {
  const validLink = 'https://wisey.app/videos/think-creatively-solve-problems-easily/lesson-5/AppleHLS1/lesson-5.m3u8';
  const invalidLink = 'https://invalidLink';

  it('should return TRUE, if link is VALID', () => {

    global.fetch = jest.fn(() => {
      return Promise.resolve(new Response(JSON.stringify({})));
    });

    expect(errorLinkHandler(validLink)).resolves.toBe(true);
  });

  it('should return FALSE, if link is INVALID', () => {

    global.fetch = jest.fn(() => {
      return Promise.resolve(new Response(JSON.stringify({})));
    });

    expect(errorLinkHandler(invalidLink)).resolves.toBe(false);
  });
});
