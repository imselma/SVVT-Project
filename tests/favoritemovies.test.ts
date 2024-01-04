import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver} from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { FavoriteMovies } from "../core/page-objects/favorite-movies-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let favoritemovies : FavoriteMovies;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    favoritemovies= new FavoriteMovies(driver);
},10000);


test("favorite movie", async () => {
    await homePage.navigateToHomePage();
    await homePage.clickInButton();
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickLogin();
    await favoritemovies.clickMovie();
    await favoritemovies.clickFavorite();
    await favoritemovies.findprofile();
    await favoritemovies.visitMyProfile();
    await favoritemovies.checkText();
},40000);


afterAll(async () => {
    await quitDriver(driver);
},10000);