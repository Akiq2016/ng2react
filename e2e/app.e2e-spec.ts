import { NgTsxPage } from './app.po';

describe('ng-tsx App', () => {
  let page: NgTsxPage;

  beforeEach(() => {
    page = new NgTsxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
