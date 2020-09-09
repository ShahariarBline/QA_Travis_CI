import { Selector } from 'testcafe';
 
fixture `Getting Started`
    .page `https://devexpress.github.io/testcafe/example/`;
    
test('My first test', async t => {
 
    const checkBox = Selector('#remote-testing')
    await t.click(checkBox)
 
    await t.wait(5000)
 
});
