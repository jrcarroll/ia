import { IaAppPage } from './app.po';

describe('ia-app App', () => {
  let page: IaAppPage;

  beforeEach(() => {
    page = new IaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
