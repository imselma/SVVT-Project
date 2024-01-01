import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver} from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { ReservednAndBoughtTicketsPage } from "../core/page-objects/reserved-and-bought-tickets-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let reservedandboughttickets : ReservednAndBoughtTicketsPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    reservedandboughttickets = new ReservednAndBoughtTicketsPage(driver);
},10000);

test("google maps location", async () => {
    await homePage.navigateToHomePage();
    await homePage.clickInButton();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickLogin();
    await reservedandboughttickets.findprofile();
    await reservedandboughttickets.findmytickets();
    await reservedandboughttickets.findCinema();
    await reservedandboughttickets.specificCinema();
    await reservedandboughttickets.checkText();
},80000);

afterAll(async () => {
    await quitDriver(driver);
},10000);
