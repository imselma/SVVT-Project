import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ReservationOfTicketPage extends BasePage {
    
    private movie = By.xpath('//div[@id="vapc"]/div[@class="sc-dqBHgY PEIlW"]/section[@class="sc-iQKALj s-entities chcHcD"]/div[@class="sc-htpNat container bIdnOx"]/ul[@class="sc-epnACN l-entity kujSdk"]/li[1]/figure[@class="sc-bsbRJL l-entity__figure cisYUz"]/a[@class="l-entity__item-link"]/div[@class="sc-kkGfuU b-image-with-loader jJEsh"]/div[@class="sc-iAyFgw b-image-with-loader__inner bCGMjS"]/img[@class="b-image-with-loader__img"]');
    private cinemaSearch = By.xpath('//div[@id="vapc"]//div[@class="sc-dqBHgY PEIlW"]//section[@class="sc-bwCtUz s-entity-details cMvHYv"]//div[@class="sc-htpNat container bIdnOx"]//main[@class="sc-hrWEMg s-entity-details__main fSvmFA"]//div[@class="sc-cSHVUG b-movies-filter hIzPOw"]//div[1]//div[2]');
    private cinemaChoose = By.xpath('//li[@class="sc-eqIVtm l-options__item jEMOfp"]//div[@class="l-options__item-inner"]');
    private dateSearch = By.xpath('//div[@class="react-dropdown-select sc-fBuWsC f-default__select fztJTo css-1tjkwe0-ReactDropdownSelect e1gzf2xs0"]//div[@class="sc-fMiknA ktbsVA"]');
    private dateChoose = By.xpath('//div[@id="vapc"]//div[@class="sc-dqBHgY PEIlW"]//section[@class="sc-bwCtUz s-entity-details cMvHYv"]//div[@class="sc-htpNat container bIdnOx"]//main[@class="sc-hrWEMg s-entity-details__main fSvmFA"]//div[@class="sc-cSHVUG b-movies-filter hIzPOw"]//div[@class="react-dropdown-select sc-fBuWsC f-default__select fztJTo css-1tjkwe0-ReactDropdownSelect e1gzf2xs0"]//div[@class="react-dropdown-select-dropdown react-dropdown-select-dropdown-position-bottom css-1imucm0-DropDown e1qjn9k90"]//ul[@class="sc-dVhcbM l-options fghLuF"]//li[3]//div[@class="l-options__item-inner"]');
    private timeChoose = By.xpath('//div[@id="vapc"]//div[@class="sc-dqBHgY PEIlW"]//section[@class="sc-bwCtUz s-entity-details cMvHYv"]//div[@class="sc-htpNat container bIdnOx"]//main[@class="sc-hrWEMg s-entity-details__main fSvmFA"]//div[@class="sc-jTzLTM sc-hXRMBi b-entity-content bTklSN"]//ul[@class="sc-kGXeez l-tickets vXoiQ"]//li[2]//a[@class="sc-dxgOiQ l-tickets__item-link gNFPJK"]');
    private plusButton = By.xpath('//*[@id="vapc"]/div/section/div/div/div/div/div[2]/div/button[2]');
    private nextButton1=By.className('sc-bdVaJa cvcMub');
    private seatChoose=By.xpath('//*[@id="vapc"]/div/section/div/div/div[1]/div/div[1]/div/ul/li[4]/ul/li[4]');
    private finalButton=By.xpath('//*[@id="vapc"]/div/section/div/div/div[2]/div[2]/button');
    
   
    constructor(driver: WebDriver) {
        super(driver);
    }
    async clickMovie() {
        await this.waitForElement(this.movie, 10000);
        await this.findElementAndClick(this.movie);
    }
    async clickCinemaSearch() {
        await this.waitForElement(this.cinemaSearch, 10000);
        await this.findElementAndClick(this.cinemaSearch);
    }
    async clickCinemaChoose() {
        await this.waitForElement(this.cinemaChoose, 10000);
        await this.findElementAndClick(this.cinemaChoose);
    }
    async clickDateSearch() {
        await this.waitForElement(this.dateSearch, 10000);
        await this.findElementAndClick(this.dateSearch);
    }
    async clickDateChoose() {
        await this.waitForElement(this.dateChoose, 10000);
        await this.findElementAndClick(this.dateChoose);
    }
    async clickTimeChoose() {
        await this.waitForElement(this.timeChoose, 10000);
        await this.findElementAndClick(this.timeChoose);
    }
    async clickPlusButton() {
        await this.waitForElement(this.plusButton, 10000);
        await this.findElementAndClick(this.plusButton);
    }
    async clickNextButton1() {
        await this.waitForElement(this.nextButton1, 10000);
        await this.findElementAndClick(this.nextButton1);
    }
    async clickSeatChoose() {
        await this.waitForElement(this.seatChoose, 10000);
        await this.findElementAndClick(this.seatChoose);
    }
    async clickFinalButton() {
        await this.waitForElement(this.finalButton, 10000);
        await this.findElementAndClick(this.finalButton);
    }
    
}