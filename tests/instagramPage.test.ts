import { HomePage } from "../core/page-objects/home-page";
import { MoviePrices } from "../core/page-objects/movie-prices-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver} from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { CineplexxInstagramPage } from "../core/page-objects/cineplexx-instagram-page";
import { InstagramPage } from "../core/page-objects/instagram-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let driver2: WebDriver;
let homePage: HomePage;
let cineplexxInstagramPage: CineplexxInstagramPage;
let moviePrices: MoviePrices;
let instagramPage: InstagramPage;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    driver2 = await createDriver(testData.url.ig_url);
    homePage = new HomePage(driver);
    cineplexxInstagramPage = new CineplexxInstagramPage(driver);
    moviePrices = new MoviePrices(driver);
    instagramPage = new InstagramPage(driver2);
   
},20000);

test("instagram page", async () => {

   await homePage.navigateToHomePage();
   await homePage.allowCookies();
   await moviePrices.clickCimenasDropDown();
   await moviePrices.clickSpecificCinema();
   await cineplexxInstagramPage.clickInstagramIcon();
   await instagramPage.confirmInstagramTitle();

}, 10000)

/*afterAll(async () => {
    await quitDriver(driver);
},10000);*/