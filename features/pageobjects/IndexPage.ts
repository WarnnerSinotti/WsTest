import allureReporter from '@wdio/allure-reporter';

import { PageButtons, Avisos } from '../buttons/pageHome';
import {config} from '../../test/config/Capabilities';

export async function BrowseButton() {
    
    const browse_btn = await browser.$(PageButtons.browse).isDisplayed();
    if (browse_btn){
        const browse_btn = await browser.$(PageButtons.browse);
        await browse_btn.waitForDisplayed({ timeout: config.timeout });          
        await browse_btn.click();
        allureReporter.addSeverity('blocker');
    } else {
        console.log('Button Browser Deixou de Existir?') //Apenas um cenário de lógica
    }
}

export async function SearchInsert() {

    const searchInsert_btn = await browser.$(PageButtons.searchInsert);
    await searchInsert_btn.waitForDisplayed({ timeout: config.timeout });          
    await searchInsert_btn.setValue('Science: Computers');
    allureReporter.addSeverity('critical');

}

export async function SearchButton(){

    const searchButton_btn = await browser.$(PageButtons.searchButton);
    await searchButton_btn.waitForDisplayed({ timeout: config.timeout });          
    await searchButton_btn.click();
    allureReporter.addSeverity('critical');
}

export async function SelectCategory() {

    const selectCategory_btn = await browser.$(PageButtons.selectCategory);
    await selectCategory_btn.waitForDisplayed({ timeout: config.timeout });          
    await selectCategory_btn.click();
    allureReporter.addSeverity('critical');

}

export async function GetText() {

        const getText_Btn = await browser.$(Avisos.noQuestionsFound);
        await expect(getText_Btn).toHaveText('No questions found.');
        allureReporter.addSeverity('trivial');

}

export async function PageList25() {

        let pageList25_btn = await browser.$(PageButtons.pageList25)
        let isExisting = await pageList25_btn.isExisting()
        console.log(isExisting);
        allureReporter.addSeverity('critical');

}

export async function ListNavegation(){

    let pageNavigation_btn = await browser.$(PageButtons.pageNavigation)
    let isExisting = await pageNavigation_btn.isExisting()
    console.log(isExisting);
    allureReporter.addSeverity('critical');
        
}

export async function AllButtons(){
    
    const browse_btn = await browser.$(PageButtons.browse);
    await browse_btn.waitForDisplayed({ timeout: config.timeout });          
    await browse_btn.click();

    const addNewQuestions_btn = await browser.$(PageButtons.addNewQuestions);
    await addNewQuestions_btn.waitForDisplayed({ timeout: config.timeout });          
    await addNewQuestions_btn.click();

    const api_btn = await browser.$(PageButtons.api);
    await api_btn.waitForDisplayed({ timeout: config.timeout });          
    await api_btn.click();

    const discuss_btn = await browser.$(PageButtons.discuss);
    await discuss_btn.waitForDisplayed({ timeout: config.timeout });          
    await discuss_btn.click();
    await browser.back()

    const Login_btn = await browser.$(PageButtons.login);
    await Login_btn.waitForDisplayed({ timeout: config.timeout });          
    await Login_btn.click();
    allureReporter.addSeverity('critical');
    
}