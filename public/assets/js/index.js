//Make sure to wait until the DOM is fully loaded
$(function() {
    //Draft a player to your team
    $(".change-drafted").on("click", function(event) {
        var id = $(this).data("id");
        var drafted = $(this).data("drafted");
        console.log(drafted);
        if(drafted === false) {
            drafted = true;
        } else {
            drafted = false;
        }

        var newDraftStatus = {
            draftStatus: drafted
        }
        console.log(drafted);
        $.ajax("/api/players/" + id, {
            type: "PUT",
            data: newDraftStatus
        }).then(
            function() {
                console.log("Player's draft status changed to ", drafted);

                location.reload();
            }
        ); 
    });


    //Add a player to the draft list
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        if($("#fName").val() === "" || $("#lName").val() === "" || $("#position").val === "" || $("#team").val() === "") {
            alert("You must fill in all lines before a player can be added to the draft board. Please revise.");
        } else {
            var newPlayer = {
                fName: $("#fName").val().trim(),
                lName: $("#lName").val().trim(),
                position: $("#position").val(),
                team: $("#team").val()
            }

            $("#fName").val("");
            $("#lName").val("");
            $("#position").val("");
            $("#team").val("");

            $.ajax("api/players", {
                type: "POST",
                data: newPlayer
            }).then(function() {
                console.log("Added a new player to the draft board");
                location.reload();
            });
        }
    });

    //Remove Player that gets drafted by "another team"
    $(".delete-player").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);
        $.ajax("/api/players/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("deleted player", id);
            location.reload();
        });
    });

    $(".reset-draft").on("click", function(event) {
        $.ajax("/api/players", {
            type: "PUT"
        }).then(function() {
            location.reload();
        })
    })


});