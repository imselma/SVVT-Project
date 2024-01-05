import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class SearchMovie extends BasePage {

    private searchIcon = By.className("sc-TOsTZ lizKaK");
    private inputField = By.className("sc-csuQGl f-default__field jTRgec");
    private confirmMovie = By.className("s-search__amount-movies");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickOnSearchIcon() {
        await this.findElementAndClick(this.searchIcon);
    }

    async inputText() {
        await this.fillInputField(this.inputField, testData.credentials.movie);
    }

    async confirmMovieText(){
        await this.checkMatchingElements(this.confirmMovie, 'FILM (1)');
    }
}