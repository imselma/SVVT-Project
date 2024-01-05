import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver} from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { RegistrationPage } from "../core/page-objects/registration-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let homePage: HomePage;
let registrationPage: RegistrationPage;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    registrationPage = new RegistrationPage(driver);
},10000);


test("user registration", async () => {
    await homePage.navigateToHomePage();
    await registrationPage.allowCookies();
    await homePage.clickRegistrationButton();
    await registrationPage.enterName();
    await registrationPage.enterSurname();
    await registrationPage.clickOnInputBirthField();
    await registrationPage.clickOnBirthYear();
    await registrationPage.clickOnBirthMonth();
    await registrationPage.clickOnBirthDay();
    await registrationPage.clickOnOkButton();
    //await registrationPage.clickGender();
    //await registrationPage.clickGenderSpecific();
    await registrationPage.clickCinema();
},200000);


/*afterAll(async () => {
    await quitDriver(driver);
},10000);*/