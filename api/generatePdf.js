const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ timeout: 60000 });
  const page = await browser.newPage();

  try {
    await page.goto("https://resume-sebin.netlify.app/", {
      waitUntil: "networkidle2",
    });
    const pdf = {
      path: "resume.pdf",
      format: "A4",
    };
    await page.pdf(pdf);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await browser.close();
  }
})();
