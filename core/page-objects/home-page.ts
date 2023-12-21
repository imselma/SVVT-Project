import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


export class HomePage extends BasePage {
    private logo = By.className("sc-kafWEX conNWU active");
    private login_button = By.className("sc-jbKcbu yeeBN");
    private registration_button = By.className("sc-uJMKN jNLKFZ")

    constructor(driver: WebDriver) {
        super(driver);
    }
    async navigateToHomePage() {
        await this.driver.findElement(this.logo).click();
    }
    async clickInButton(){
        await this.findElementAndClick(this.login_button);
    }
    async clickRegistrationButton(){
        await this.findElementAndClick(this.registration_button);
    }
}