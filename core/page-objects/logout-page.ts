import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LogoutPage extends BasePage {

    private profile = By.xpath('//div[@class="sc-cHGsZl header__logged dJEtQg"]//span[@class="_with-chevron"]'); 
    private logout = By.xpath('//div[@class="sc-kgAjT header__control dTZgov"]//div[@class="sc-cHGsZl header__logged dJEtQg _hover"]//div[@class="sc-kvZOFW l-sublist gCXROS"]//ul[@class="sc-eHgmQL menu fibqHV"]//li[4]//button[@class="menu__link"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async findprofile(){
        await this.findElementAndClick(this.profile);
    }
    async findlogout(){
        await this.findElementAndClick(this.logout);
    }
    
}