import { MovieshopPage } from './app.po';

describe('movieshop App', () => {
  let page: MovieshopPage;

  beforeEach(() => {
    page = new MovieshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
