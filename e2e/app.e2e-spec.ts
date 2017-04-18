import { MetamapPage } from './app.po';

describe('metamap App', () => {
  let page: MetamapPage;

  beforeEach(() => {
    page = new MetamapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
