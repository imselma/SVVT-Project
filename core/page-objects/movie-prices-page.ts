import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class MoviePrices extends BasePage {

    private cookiesButton = By.xpath('//div[@class="b-cookies-agreement__buttons"]//button[@class="sc-bdVaJa cvcMub"]');
    private cinemas = By.className("sc-frDJqD l-header-nav__item eCXZFJ");
    private specificCinema = By.className("l-sublist__link");
    private priceList = By.className("s-cinema-details__link-prices");
    private title = By.className("b-price-list__title");

   
    constructor(driver: WebDriver) {
        super(driver);
    }

    async allowCookies() {
        await this.findElementAndClick(this.cookiesButton);
    }

    async clickCimenasDropDown() {
        await this.findElementAndClick(this.cinemas);
    }

    async clickSpecificCinema() {
        await this.findElementAndClick(this.specificCinema);
    }

    async clickPriceList() {
        await this.findElementAndClick(this.priceList);
    }

    async confirmTitleMatches(){
        await this.checkMatchingElements(this.title, 'CJENOVNIK KINO ULAZNICA');
    }
  
}