import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class GoogleMapLocation extends BasePage {

    private cinema=By.xpath('//li[@class="sc-frDJqD l-header-nav__item eCXZFJ"]//span[@class="_with-chevron"]');
    private cinemSarajevo=By.className("l-sublist__link");   
    private mapSearch=By.className("s-cinema-details__address-btn-map");
    private map=By.className("gm-style");

    constructor(driver: WebDriver) {
        super(driver);
    }
    async clickCinema() {
        await this.findElementAndClick(this.cinema);
    }
    async clickCinemaSarajevo() {
        await this.findElementAndClick(this.cinemSarajevo);
    }
    async findMap() {
        await this.findElementAndClick(this.mapSearch);
    }   
    async mapLocation() {
        await this.findElement(this.map);
    }  
}