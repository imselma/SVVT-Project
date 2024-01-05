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
    private genderField = By.className("sc-fMiknA ktbsVA");
    private genderchoice = By.xpath('//*[@id="vapc"]/div/section/div/div/form/div[1]/div[4]/div/div[3]/ul/li[3]/div');
    private cinemaField = By.xpath('//div[@class="f-default__field favoriteCinema"]//div[@class="react-dropdown-select sc-fBuWsC f-default__select fztJTo css-1tjkwe0-ReactDropdownSelect e1gzf2xs0"]');
    private specificCinema = By.className("l-options__item-inner");
    private emailFiled = By.xpath('//div[@class="f-default__field email"]//div[@class="sc-Rmtcm f-default__row eAoJwr"]//input[@class="sc-csuQGl f-default__field jTRgec"]');
    private passwordField = By.xpath('//div[@class="f-default__field password"]//div[@class="sc-Rmtcm f-default__row eAoJwr"]//input[@class="sc-csuQGl f-default__field jTRgec"]');
    private repeatPasswordField = By.xpath('//div[@class="f-default__field repeatPassword"]//div[@class="sc-Rmtcm f-default__row eAoJwr"]//input[@class="sc-csuQGl f-default__field jTRgec"]');
    private cookiesChcek = By.xpath('//*[@id="vapc"]/div/section/div/div/form/div[4]/label/span[1]');
    private conditionsCheck = By.xpath('//*[@id="vapc"]/div/section/div/div/form/div[5]/label/span[1]');
    private securityChcek = By.xpath('//*[@id="vapc"]/div/section/div/div/form/div[6]/label/span[1]');
    private registerButton = By.xpath('//*[@id="vapc"]/div/section/div/div/form/button');
    private confirmationButton = By.className("b-modal-default__btn sc-bdVaJa cvcMub");
    private loadLoginPage = By.className("sc-hzDkRC hOUgTu");
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

    async clickGender(){
        await this.waitForElement(this.genderField, 10000);
        await this.findElementAndClick(this.genderField);
    }

    async clickGenderSpecific(){
       await this.waitForElement(this.genderchoice, 50000);
       await this.findElementAndClick(this.genderchoice);
    }

    async clickCinema(){
        await this.findElementAndClick(this.cinemaField);
    }

    async clickSpecificCinema(){
        await this.findElementAndClick(this.specificCinema);
    }

    async clickEmailField(){
        await this.findElementAndClick(this.emailFiled);
    }

    async enterEmail() {
        await this.fillInputField(this.emailFiled, testData.data.email1);
    }

    async clickPasswordField() {
        await this.findElementAndClick(this.passwordField);
    }

    async enterPassword() {
        await this.fillInputField(this.passwordField, testData.credentials.password1);
    }

    async clickRepeatPasswordField() {
        await this.findElementAndClick(this.repeatPasswordField);
    }

    async enterRepeatPassword() {
        await this.fillInputField(this.repeatPasswordField, testData.credentials.password1);
    }

    async clickCookieChcekbox() {
        await this.findElementAndClick(this.cookiesChcek);
    }

    async clickConditionChcekbox() {
        await this.findElementAndClick(this.conditionsCheck);
    }

    async clickSecurityChcekbox() {
        await this.findElementAndClick(this.securityChcek);
    }

    async clickRegisterButton() {
        await this.findElementAndClick(this.registerButton);
    }

    async clickConfirmationButton() {
        await this.findElementAndClick(this.confirmationButton);
    }

    async confirmThatLoginPageIsLoaded(){
        await this.checkMatchingElements(this.loadLoginPage,'E-Mail');
    }
}