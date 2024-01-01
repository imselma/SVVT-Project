import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ReservednAndBoughtTicketsPage extends BasePage {

    private profile = By.xpath('//div[@class="sc-cHGsZl header__logged dJEtQg"]//span[@class="_with-chevron"]'); 
    private mytickets = By.xpath('//div[@class="sc-kgAjT header__control dTZgov"]//div[@class="sc-cHGsZl header__logged dJEtQg _hover"]//div[@class="sc-kvZOFW l-sublist gCXROS"]//ul[@class="sc-eHgmQL menu fibqHV"]//li[2]//a[@class="menu__link"]');
    private chooseCinema= By.className("sc-fMiknA ktbsVA");
    private sarajevoCinema= By.className("l-options__item-inner");
    private finalmessage= By.className("b-no-content__text");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async findprofile(){
        await this.findElementAndClick(this.profile);
    }
    async findmytickets(){
        await this.findElementAndClick(this.mytickets);
    }
    async findCinema(){
        await this.findElementAndClick(this.chooseCinema);
    }
    async specificCinema(){
        await this.findElementAndClick(this.sarajevoCinema);
    }
    async checkText(){
        await this.checkMatchingElements(this.finalmessage, 'Nema Zapisa');
    }
    
}