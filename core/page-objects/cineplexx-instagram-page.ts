import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CineplexxInstagramPage extends BasePage {

    private cookiesButton = By.xpath('//div[@class="b-cookies-agreement__buttons"]//button[@class="sc-bdVaJa cvcMub"]');
    private instagramIcon = By.xpath('//ul[@class="sc-jlyJG l-social cmBeJJ"]//li[1]');
   
    constructor(driver: WebDriver) {
        super(driver);
    }

    async allowCookies() {
        await this.findElementAndClick(this.cookiesButton);
    }

    async clickInstagramIcon() {
        await this.findElementAndClick(this.instagramIcon);
    }
  
}