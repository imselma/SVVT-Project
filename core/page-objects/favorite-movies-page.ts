import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class FavoriteMovies extends BasePage {

    private movie = By.xpath('//div[@id="vapc"]/div[@class="sc-dqBHgY PEIlW"]/section[@class="sc-iQKALj s-entities chcHcD"]/div[@class="sc-htpNat container bIdnOx"]/ul[@class="sc-epnACN l-entity kujSdk"]/li[1]/figure[@class="sc-bsbRJL l-entity__figure cisYUz"]/a[@class="l-entity__item-link"]/div[@class="sc-kkGfuU b-image-with-loader jJEsh"]/div[@class="sc-iAyFgw b-image-with-loader__inner bCGMjS"]/img[@class="b-image-with-loader__img"]');
    private heartIcon = By.className("btn-watchlist sc-eXEjpC jLIimD");
    private profile = By.xpath('//div[@class="sc-cHGsZl header__logged dJEtQg"]//span[@class="_with-chevron"]'); //samo hover za ovaj element
    private myprofile = By.xpath('//div[@class="sc-kgAjT header__control dTZgov"]//div[@class="sc-cHGsZl header__logged dJEtQg _hover"]//div[@class="sc-kvZOFW l-sublist gCXROS"]//ul[@class="sc-eHgmQL menu fibqHV"]//li[1]//a[@class="menu__link"]');
    private listofFavoriteMovies=By.xpath('//div[3]//h4[@class="sc-jzJRlG sc-kfGgVZ knTZRJ"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickMovie() {
        await this.waitForElement(this.movie, 10000);
        await this.findElementAndClick(this.movie);
    }
    async clickFavorite(){
        await this.findElementAndClick(this.heartIcon);
    }
    async findprofile(){
        await this.findElementAndClick(this.profile);
    }
    async visitMyProfile(){
        await this.findElementAndClick(this.myprofile);
    }
    async checkText(){
        await this.checkMatchingElements(this.listofFavoriteMovies, 'MOJA LISTA FILMOVA');
    }
    
}