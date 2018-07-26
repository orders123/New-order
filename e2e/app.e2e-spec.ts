import { OrdPage } from './app.po';

describe('ord App', function() {
  let page: OrdPage;

  beforeEach(() => {
    page = new OrdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
