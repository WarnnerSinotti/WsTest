import allureReporter from '@wdio/allure-reporter';

import {URL_SITE} from "../data/constants/index";


export async function urlOpenTrivia() {
  
    allureReporter.addSeverity('blocker');
    await browser.url(URL_SITE);
    
}

