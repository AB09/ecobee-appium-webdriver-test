describe('Ecobee assignment - Question 2', () => {
    it('should print number of titles attribute', async () => {
        await browser.url(`http://m.slashdot.org/`);
        let storyTitleElem = await $$('.story-title');
        console.log(`Total articles on the page are ${storyTitleElem.length}`);
    });
});

