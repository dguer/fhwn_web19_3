const express = require('express');
const puppeteer = require('puppeteer');
var bodyparser = require('body-parser');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const app = express();

var url;
var normalSite;
var changesSite;
var element = null;

app.use(bodyparser.json());

app.post('/loadSite', async (req, res) => {
    normalSite = "";
    changesSite= "";
    element = req.body.element;
    console.log(element);

    var tempSite = await checkForSite(req.body.url);
    console.log(tempSite);

    url = req.body.url;
    console.log(req.body.url);

    if (normalSite === "") {
        res.status(404).json({ reason: 'Not Found' });
    }
    else {
        var doc = (new JSDOM(normalSite)).window.document;
        var temp = doc.querySelectorAll(element);
        var stack = [];

        temp.forEach(element => {
            stack.push(element.outerHTML);
        });
        res.status(200).json({ website: stack });
    }
});

app.use(express.static(__dirname + '/dist/ChangeDetection'));

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

app.get('/checkForChange', async (req, res) => {
    var temp = await loadNewPage();
    temp.push("Changes found!");
    res.status(200).json({ res: temp });
});


async function checkForSite(site) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.goto(site, { waitUntil: "networkidle2" });
        await page.waitFor(1 * 1000);
        normalSite = await page.content();
        console.log("Page found!");

    } catch (error) {
        console.log("No Site!");

        normalSite = "";
        return false;
    }

    await browser.close();
    return true;
};

async function loadNewPage() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.goto(url, { waitUntil: "networkidle2" });
        await page.waitFor(1 * 1000);
        changesSite = await page.content();
        console.log("Found Site!");
        var doc = (new JSDOM(normal)).window.document;
        var oldRes = doc.querySelectorAll(element);

        var doc02 = (new JSDOM(element)).window.document;
        var res = doc02.querySelectorAll(element);

        var changedObj = [];

        if (oldRes.length < res.length) {
            console.log("oldres -");

            for (let index = 0; index < oldRes.length; index++) {
                if (oldRes[index].outerHTML !== res[index].outerHTML) {
                    changedObj.push(res[index].outerHTML);
                }
            }

            for (let index = oldRes.length; index < res.length; index++) {
                changedObj.push(res[index].outerHTML);

            }
        } else {
            console.log("oldres +");
            for (let index = 0; index < res.length; index++) {
                if (oldRes[index].outerHTML !== res[index].outerHTML) {
                    console.log("changed");

                    changedObj.push(res[index].outerHTML);
                }
                console.log(index);

            }

            for (let index = res.length; index < oldRes.length; index++) {
                changedObj.push(oldRes[index].outerHTML);

            }
        }

        normalsite = changesSite;
        await browser.close();
        return changedObj;

    } catch (error) {
        changesSite = "";
        return [];
    }
}
