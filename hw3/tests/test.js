// Theresa Wunderlich
const fs = require('fs');
const $ = require('jquery');
issuestest('test selectEvent', () => {     
 
// Read index.html into a stringconst
html = fs.readFileSync('public/index.html', 'utf8');     
expect(html).toEqual(expect.anything()); // Check that HTML is not null
// Load the HTML into Jest's mock DOM
document.body.innerHTML = html;    
 // Ensure DOM is fully loaded before querying   
 $(function() {         
expect($('h1').html()).toBe("Cheesecake Order Form"); 
}); 
});