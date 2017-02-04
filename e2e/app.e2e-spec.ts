import { Assignment14Page } from './app.po';

describe('assignment14 App', function() {
  let page: Assignment14Page;

  beforeEach(() => {
    page = new Assignment14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
