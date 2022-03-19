import { Given, When, Then } from '@wdio/cucumber-framework';

import { AllButtons } from '../pageobjects/IndexPage';
import { urlOpenTrivia } from '../pageobjects/UrlPage';

Given(/^Acesso Page (.+)$/, async (Account) => {
    await urlOpenTrivia();
    
});

When(/^Clico em todos os buttons (.+)$/, async ({}) => {
    await AllButtons();
    
});
    
Then(/^Confirmo URL Pagina (.+)$/, async ({}) => {
   
    await expect(browser).toHaveUrl('https://opentdb.com/login.php');
});



