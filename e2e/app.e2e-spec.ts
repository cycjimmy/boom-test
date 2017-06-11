import { BoomTestPage } from './app.po';

describe('boom-test App', () => {
  let page: BoomTestPage;

  beforeEach(() => {
    page = new BoomTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
