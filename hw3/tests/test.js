// Theresa Wunderlich
test('test selectEvent', () => {
    const fs = require('fs');
    const $ = require('jquery');
  
    // Read index.html into a string
    const html = fs.readFileSync('public/index.html', 'utf8');
    expect(html).toEqual(expect.anything()); // Check that HTML is not null
  
    // Load the HTML into Jest's mock DOM
    document.body.innerHTML = html;
  
    // Ensure DOM is fully loaded before querying
    $(function() {
      expect($('h1').html()).toBe("Cheesecake Order Form");
    });
  });