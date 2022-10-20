const puppetter=require('puppeteer');
const sql=require('mssql/msnodesqlv8');
// const { Time } = require('mssql/msnodesqlv8');
//const { Float } = require('mssql/msnodesqlv8');






//ScrapeWebSite Methot Start
async function scrapeWebSite(){
        
        const xPath='//*[@id="product-detail-app"]/div/div[2]/div[1]/div[2]/div[2]/div[1]/div/div/div[4]/div/div/span';

        url= 'https://www.trendyol.com/apple/iphone-11-64gb-aksesuarsiz-kutu-kirmizi-cep-telefonu-apple-turkiye-garantili-p-65182164?boutiqueId=61&merchantId=2008' 
        const browser=await puppetter.launch();
        const page=await browser.newPage();
        await page.goto(url);
        
        //Aksa Value web Scruping turn a float==>Start
        const[Element]=await page.$x(xPath);
        const Value=await Element.getProperty('textContent'); //innerText
        const Info=await Value.jsonValue();        
        let ValueTxt=AksaInfo.toString(); //json value ile gelen değeri string e çevirdik
        const ValueAtLast=AksaValueTxt.replace(',','.');
        let FloatValue=parseFloat(ValueAtLast);
        console.log(FloatValue);
        
        console.log('value: '+FloatValue);
        browser.close();
    
    
}
    
scrapeWebSite();







