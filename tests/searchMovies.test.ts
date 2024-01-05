import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver} from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { SearchMovie } from "../core/page-objects/search-movie";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let searchMovie: SearchMovie;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    searchMovie = new SearchMovie(driver);
},10000);

test("search movie", async () => {

    await searchMovie.clickOnSearchIcon();
    await searchMovie.inputText();
    await searchMovie.confirmMovieText();

}, 10000)

/*afterAll(async () => {
    await quitDriver(driver);
},10000);*/