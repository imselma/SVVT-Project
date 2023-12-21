import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class RegistrationPage extends BasePage {

    private inputNameField = By.xpath('//div[@class="f-default__field firstName"]//div[@class="sc-Rmtcm f-default__row eAoJwr"]//input[@class="sc-csuQGl f-default__field jTRgec"]');
    private inputSurnameField = By.xpath('//div[@class="f-default__field lastName"]//div[@class="sc-Rmtcm f-default__row eAoJwr"]//input[@class="sc-csuQGl f-default__field jTRgec"]');
    private inputBirthDateField = By.xpath('//div[@class="f-default__field birth"]//div[@class="sc-Rmtcm f-default__row eAoJwr"]');
    private birthYear = By.xpath('/html/body/div[3]/div[2]/div/div[1]/div[2]/div[119]');//da li je okej sve (i sto ne moze 2002, vec samo 2018)
    private birthMonth = By.xpath('/html/body/div[3]/div[2]/div/div[1]/div[2]/div[12]');//ovdje ne znamo drugacije nego sa xpathovima
    private birthDay = By.xpath('/html/body/div[3]/div[2]/div/div[1]/div[3]/div/div[4]/div[6]');
    private okField = By.xpath('/html/body/div[3]/div[2]/div/div[2]/button[2]/span[1]') //ne mozemo naci rucno
    private genderField = By.xpath('//div[@class="f-default__field gender"]//div[@class="react-dropdown-select sc-fBuWsC f-default__select fztJTo css-1tjkwe0-ReactDropdownSelect e1gzf2xs0"]//div[@class="sc-fMiknA ktbsVA"]');
    //private genderchoice = By.xpath('//*[@id="vapc"]/div/section/div/div/form/div[1]/div[4]/div/div[3]/ul/li[3]');
    /*private cinema =By.className("sc-fMiknA kleITX");
    private cinemachoice= By.className("sc-eqIVtm l-options__item egfgji");*/
    constructor(driver: WebDriver) {
        super(driver);
    }
    async enterName() {
        await this.fillInputField(this.inputNameField, testData.credentials.name);
    }
    async enterSurname() {
        await this.fillInputField(this.inputSurnameField, testData.credentials.last_name);
    }
    async clickOnInputBirthField(){
        await this.findElementAndClick(this.inputBirthDateField);
    }
    async clickOnBirthYear(){
        await this.waitForElement(this.birthYear, 10000);
        await this.findElementAndClick(this.birthYear);
    }
    async clickOnBirthMonth(){
        await this.waitForElement(this.birthMonth, 10000);
        await this.findElementAndClick(this.birthMonth);
    }
    async clickOnBirthDay(){
        await this.waitForElement(this.birthDay, 10000);
        await this.findElementAndClick(this.birthDay);
    }
    async clickOnOkButton(){
        //await this.waitForElement(this.okField, 10000);
        await this.findElementAndClick(this.okField);
    }
    async clickGender(){
        await this.waitForElement(this.genderField, 10000);
        await this.findElementAndClick(this.genderField);
    }
   /* async clickGenderSpecific(){
        await this.waitForElement(this.genderchoice, 20000);
        await this.findElementAndClick(this.genderchoice);
    }
    async clickCinema(){
        await this.waitForElement(this.okField, 10000);
        await this.findElementAndClick(this.cinema);
    }
    async clickCinemaChoice(){
        await this.waitForElement(this.okField, 10000);
        await this.findElementAndClick(this.cinemachoice);
    }*/
}