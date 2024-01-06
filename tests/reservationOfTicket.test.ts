import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver} from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { ReservationOfTicketPage } from "../core/page-objects/reservation-of-ticket";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let reservationOfTicketPage : ReservationOfTicketPage;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    reservationOfTicketPage = new ReservationOfTicketPage(driver);
},10000);


test("ticket reservation", async () => {
    await homePage.navigateToHomePage();
    await homePage.clickInButton();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickLogin();
    await reservationOfTicketPage.clickMovie();
    await reservationOfTicketPage.clickCinemaSearch();
    await reservationOfTicketPage.clickCinemaChoose();
    await reservationOfTicketPage.clickDateSearch();
    await reservationOfTicketPage.clickDateChoose();
    await reservationOfTicketPage.clickTimeChoose();
    await reservationOfTicketPage.clickPlusButton();
    await reservationOfTicketPage.clickNextButton1();
    await reservationOfTicketPage.clickSeatChoose();
    await reservationOfTicketPage.clickFinalButton();
    await reservationOfTicketPage.checkText();
},40000);


afterAll(async () => {
    await quitDriver(driver);
},10000);