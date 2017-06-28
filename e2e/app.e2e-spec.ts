import { BlogPage } from './app.po';

describe('blog App', () => {
  let page: BlogPage;

  beforeEach(() => {
    page = new BlogPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
