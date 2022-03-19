import { Given, When, Then } from '@wdio/cucumber-framework';

import { BrowseButton, ListNavegation, PageList25, SearchButton, SearchInsert, SelectCategory,} from '../pageobjects/IndexPage';
import { urlOpenTrivia } from '../pageobjects/UrlPage';

Given(/^que navego para a pagina de busca do banco de questoes (.+)$/, async (url) => {
    await urlOpenTrivia();
    
});

When(/^acesso Browse (.+)$/, async ({}) => {
    await BrowseButton();
    
});
    
When(/^digito Science Computers no campo de busca (.+)$/, async ({}) => {
    await SearchInsert();
});

When(/^seleciono categoria Science Computers (.+)$/, async ({}) => {
    await SelectCategory();
});

When(/^clico no botao de buscar (.+)$/, async ({}) => {
    await SearchButton();
});

When(/^consta 25 itens (.+)$/, async ({}) => {
    await PageList25();
});

Then(/^visualizo controle de paginacao (.+)$/, async ({}) => {
    await ListNavegation();
});


