import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ChangeInformation extends BasePage {

    private profileIcon =  By.className("sc-cHGsZl header__logged dJEtQg");
    private mojNalogField = By.xpath('//div[@class="sc-kgAjT header__control dTZgov"]//div[@class="sc-cHGsZl header__logged dJEtQg _hover"]//div[@class="sc-kvZOFW l-sublist gCXROS"]//ul[@class="sc-eHgmQL menu fibqHV"]//li[1]//a[@class="menu__link"]');
    private editButton = By.className("b-head__link");
    private firstNameField = By.id("firstName");
    private cookiesButton = By.xpath('//div[@class="b-cookies-agreement__buttons"]//button[@class="sc-bdVaJa cvcMub"]');
    private submitButton = By.className("sc-bdVaJa cvcMub");
    private backButton = By.className("s-account__title-link-back");
   // private firstName = By.xpath('//div[@class="b-head__inner"]//p[@class="sc-krvtoX iUcteS"]'); Bude 1/1 ali nece da ga pronadje kad runam
    private firstName = By.xpath('//*[@id="vapc"]/div/section/div/main/div/div[2]/div[1]/div[1]/p');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async allowCookies() {
        await this.findElementAndClick(this.cookiesButton);
    }


    async navigateToProfileIcon() {
        await this.findElementAndClick(this.profileIcon);
    }

    async clikOnMojNalog() {
        await this.findElementAndClick(this.mojNalogField);
    }

    async clickOnEditIcon() {
        await this.findElementAndClick(this.editButton);
    }

    async clickFirstNameField() {
        await this.findElementAndClick(this.firstNameField);
    }

    async clearField() {
        await this.clear(this.firstNameField);
    }

    async inputFirstNameField() {
        await this.fillInputField(this.firstNameField, testData.credentials.nameToChange);
    }

    async clickOnSubmitButton() {
        await this.waitForElement(this.submitButton, 10000);
        await this.findElementAndClick(this.submitButton);
    }

    async clickOnBackButton() {
        await this.findElementAndClick(this.backButton);
    }

    async confirmChangedText(){
        await this.checkMatchingElements(this.firstName, 'Amina Meric');
    }


}

