import { Given, When, Then } from '@wdio/cucumber-framework';

import { BrowseButton, GetText, SearchButton, SearchInsert } from '../pageobjects/IndexPage';
import { urlOpenTrivia } from '../pageobjects/UrlPage';


Given(/^que navego para a pagina de busca do banco de questoes (.+)$/, async (url) => {
    await urlOpenTrivia();
    await BrowseButton();
    
});

When(/^digito Science Computers no campo de busca (.+)$/, async ({}) => {
    await SearchInsert();
    
});

When(/^clico no botao de buscar (.+)$/, async ({}) => {
    await SearchButton();
});

Then(/^visualizo uma mensagem de erro com o texto No questions found. (.+)$/, async ({}) => {
    await GetText();
});

