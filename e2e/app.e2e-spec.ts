import { UntitledFolderPage } from './app.po';

describe('untitled-folder App', function() {
  let page: UntitledFolderPage;

  beforeEach(() => {
    page = new UntitledFolderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
