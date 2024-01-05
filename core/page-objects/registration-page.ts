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
    private birthYear = By.xpath('/html/body/div[3]/div[2]/div/div[1]/div[2]/div[119]');
    private birthMonth = By.xpath('/html/body/div[3]/div[2]/div/div[1]/div[2]/div[12]');
    private birthDay = By.xpath('/html/body/div[3]/div[2]/div/div[1]/div[3]/div/div[4]/div[6]');
    private okField = By.xpath('/html/body/div[3]/div[2]/div/div[2]/button[2]/span[1]') 
    //private genderField = By.className("sc-fMiknA ktbsVA");
    //private genderchoice = By.className("sc-eqIVtm l-options__item egfgji");
    private cinemaField = By.className("sc-fMiknA kleITX");
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
        await this.findElementAndClick(this.okField);
    }
   /* async clickGender(){
        await this.waitForElement(this.genderField, 10000);
        await this.findElementAndClick(this.genderField);
    }*/
   /* async clickGenderSpecific(){
       await this.waitForElement(this.genderchoice, 50000);
       await this.findElementAndClick(this.genderchoice);
    }*/
    async clickCinema(){
        await this.waitForElement(this.cinemaField, 10000);
        await this.findElementAndClick(this.cinemaField);
    }
   /* async clickCinemaChoice(){
        await this.waitForElement(this.okField, 10000);
        await this.findElementAndClick(this.cinemachoice);
    }*/
}