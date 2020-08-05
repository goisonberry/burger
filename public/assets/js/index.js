// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $("#devour").on("click", function (event) {
    let id = $(this).data("id");
    console.log(id);
    let devBurger = $(this).data("id");
    console.log(devBurger);

    let devouredBurger = {
      devoured: devBurger,
    };
    console.log(devouredBurger);

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: devouredBurger,
    }).then(function () {
      console.log("This burger was devoured", devBurger);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burgerName").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("added new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
