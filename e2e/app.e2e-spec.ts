import { TdAppPage } from './app.po';

describe('td-app App', () => {
  let page: TdAppPage;

  beforeEach(() => {
    page = new TdAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
