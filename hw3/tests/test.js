// Theresa Wunderlich

/**
 * Test suite for the selectEvent functionality.
 */
test('test selectEvent', () => {
    // Import required modules
    const fs = require('fs'); // File system module
    const $ = require('jquery'); // jQuery library
  
    /**
     * Read the contents of index.html into a string.
     */
    const html = fs.readFileSync('public/index.html', 'utf8');
  
    // Verify that the HTML content is not null
    expect(html).toEqual(expect.anything());
  
    /**
     * Load the HTML content into Jest's mock DOM.
     */
    document.body.innerHTML = html;
  
    /**
     * Ensure the DOM is fully loaded before querying its elements.
     */
    $(function() {
      // Verify that the h1 element contains the expected text
      expect($('h1').html()).toBe("Cheesecake Order Form");
    });
  });