import allureReporter from '@wdio/allure-reporter';

import {URL_SITE} from "../data/constants/index";
import {resolution} from "../../test/config/Capabilities";

const Maximize = resolution.maximizeWindow

export async function urlOpenTrivia() {
  
    allureReporter.addSeverity('blocker');
    if(Maximize){
        browser.maximizeWindow()
    } else {
        console.log('No Maximize Window')
    }
    await browser.url(URL_SITE);
    
}


/*  PODERIA PASSAR PARAMETRO VINDO DO CUCUMBER, TRAZENDO PARA A FUNÇÃO CONFORME ABAIXO
    MAS TODOS OS FEATURES PRECISO INSERIR A URL, EU DEFINO EM UM ARQUIVO E CHAMO EM TODOS,
    MINHA OPINIÃO ACHO MAIS PRÁTICO E FÁCIL DE REALIZAR MANUTENÇÃO  !

    Defino o caminho da url em cucumber, passo para o step e para a função.

export async function urlOpenTrivia(url) {
  
    allureReporter.addSeverity('blocker');
    await browser.url(url);
    
} */
