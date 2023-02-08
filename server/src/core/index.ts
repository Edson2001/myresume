import fs from "fs"
import {Page} from 'puppeteer-core';

export default function core(){

    async function navigate(page: Page){

        await page.goto('https://google.com')

    }
    return {navigate}
}