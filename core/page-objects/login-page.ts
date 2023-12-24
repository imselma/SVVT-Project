import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LoginPage extends BasePage {

    private email = By.id("email");
    private password = By.id("password");
    private loginButton = By.xpath('//button[@type="submit"]');
    constructor(driver: WebDriver) {
        super(driver);
    }
    async enterEmail() {
        await this.fillInputField(this.email, testData.data.email);
    }
    async enterPassword() {
        await this.fillInputField(this.password, testData.credentials.password);
    }
    async clickLogin() {
        await this.findElementAndClick(this.loginButton);
    }
}