import { AppPage } from './app.po';

describe('Ejemplos de pruebas', () => {
  let page: AppPage;

  //configuración del testing 
  beforeEach(() => {
    page = new AppPage();
  });

  //testing a unidades de codigo
  it('Prueba 1', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('Esta es mi promera prueba');
  });

  it('Prueba 2', async () => {
   await page.navigateTo();
    expect(await page.getTitleTextH2()).toEqual('Esta es mi segunda prueba');
  });

  it('Prueba 3', async () => {
    await page.navigateTo();
     expect(await page.getTitlePar()).toEqual('Esta es mi tercera prueba');
   });


});
