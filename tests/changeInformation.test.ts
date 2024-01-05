import { HomePage } from "../core/page-objects/home-page";
import { LoginPage } from "../core/page-objects/login-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver} from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { ChangeInformation } from "../core/page-objects/change-information";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let changeInformation: ChangeInformation;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    changeInformation = new ChangeInformation(driver);
},10000);

test("change information", async () => {
    
    await homePage.navigateToHomePage();
    await changeInformation.allowCookies();
    await homePage.clickInButton();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickLogin();
    await changeInformation.navigateToProfileIcon();
    await changeInformation.clikOnMojNalog();
    await changeInformation.clickOnEditIcon();
    await changeInformation.clickFirstNameField();
    await changeInformation.clearField();
    await changeInformation.inputFirstNameField();
    await changeInformation.clickOnSubmitButton();
    await changeInformation.clickOnBackButton();
    await changeInformation.confirmChangedText();

},700000);


/*afterAll(async () => {
    await quitDriver(driver);
},10000);*/