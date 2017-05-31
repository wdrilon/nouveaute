import { NouveauteSolutionsPage } from './app.po';

describe('nouveaute-solutions App', () => {
  let page: NouveauteSolutionsPage;

  beforeEach(() => {
    page = new NouveauteSolutionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
