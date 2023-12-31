import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver} from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { GoogleMapLocation } from "../core/page-objects/google-map-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let googlemaplocation : GoogleMapLocation;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    googlemaplocation = new GoogleMapLocation(driver);
},10000);

test("google maps location", async () => {
    await homePage.navigateToHomePage();
    await homePage.clickInButton();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickLogin();
    await googlemaplocation.clickCinema();
    await googlemaplocation.clickCinemaSarajevo();
    await googlemaplocation.findMap();
    await googlemaplocation.mapLocation();
},80000);

afterAll(async () => {
    await quitDriver(driver);
},10000);
