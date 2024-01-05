import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver} from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { MoviePrices } from "../core/page-objects/movie-prices-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let moviePrices: MoviePrices;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    moviePrices = new MoviePrices(driver);
   
},20000);

test("movie prices", async () => {

   await moviePrices.allowCookies();
   await moviePrices.clickCimenasDropDown();
   await moviePrices.clickSpecificCinema();
   await moviePrices.clickPriceList();
   await moviePrices.confirmTitleMatches();

}, 10000)

/*afterAll(async () => {
    await quitDriver(driver);
},10000);*/