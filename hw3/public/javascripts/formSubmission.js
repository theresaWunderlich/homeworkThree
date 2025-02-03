$(document).ready(function() {
    // Attach event listener to the submit button
    $('#orderButton').click(function(event) {
      // Prevent the form from submitting immediately
      event.preventDefault(); 
  
      // Get form field values
      var topping = $("input[name='Topping']:checked").val();
      var quantity = $('#Quantity').val();
      var notes = $('#notes').val().toLowerCase(); // Convert notes to lowercase

      // Check if notes contain the word vegan (case-insensitive)
      if (notes.includes("vegan")) {
        alert("Warning: Cheesecakes contain dairy!");
      } else {
        // Remove the order form after submission
        $('#orderForm').remove();

        // Create and display the order confirmation message
        var confirmationMessage = '<p>Thank you! Your order has been placed.</p>';
        confirmationMessage += '<p>Details of your order:</p>';
        confirmationMessage += '<p>Topping: ' + topping + '</p>';
        confirmationMessage += '<p>Quantity: ' + quantity + '</p>';
        confirmationMessage += '<p>Notes: ' + notes + '</p>';

        // Insert the confirmation message above the total orders section
        $('section').before(confirmationMessage);
      }
    });

    // Show dropdown when hovering over the month widget
    $('.month-widget').hover(function() {
      $('#monthDropdown').stop(true, true).slideDown(200);
    }, function() {
      $('#monthDropdown').stop(true, true).slideUp(200);
    });

    // Keep the dropdown open while hovering over it
    $('#monthDropdown').hover(function() {
      $(this).stop(true, true).show();
    }, function() {
      $(this).stop(true, true).slideUp(200);
    });

    // Update the month display and hide the dropdown when a month is clicked
    $('#monthDropdown a').click(function(event) {
      event.preventDefault();
      var selectedMonth = $(this).data('month');
      $('#monthDisplay').text(selectedMonth);
      $('#monthDropdown').slideUp(200);
    });
  });