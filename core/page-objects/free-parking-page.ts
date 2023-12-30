import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class FreeParkingPage extends BasePage {

    private cinema=By.xpath('//li[@class="sc-frDJqD l-header-nav__item eCXZFJ"]//span[@class="_with-chevron"]');
    private cinemSarajevo=By.xpath('//a[@href="/cinemas/1182?date=2023-12-30"]');
    private youtubelink = By.css('a[href*="youtube.com"]');
    private youtubeText=By.xpath('//h1[@class="style-scope ytd-watch-metadata"]');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async clickCinema() {
        await this.findElementAndClick(this.cinema);
    }
    async clickCinemaSarajevo() {
        await this.findElementAndClick(this.cinemSarajevo);
    }
    async parking() {
        
        await this.findElementAndClick(this.youtubelink);
    }
    
    async parkingConfirmation() {
        await this.findElementAndClick(this.youtubeText);
    }
    
    
}