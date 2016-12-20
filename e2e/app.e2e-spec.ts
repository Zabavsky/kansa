import { KansaPage } from './app.po';

describe('kansa App', function() {
  let page: KansaPage;

  beforeEach(() => {
    page = new KansaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
