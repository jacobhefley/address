function Place (loc, date, des){
			this.location = loc;
			this.time = date;
			this.description = des;
		}
$(function(){
	$("form#input").submit(function(event){
		event.preventDefault();

		var nameInput = $("#name").val();
		var locationInput = $("#location").val();
		var dateInput = $("#date").val();
		var desInput = $("#description").val();

		var newPlace = new Place(locationInput, dateInput, desInput);

		$("#testname").append("<li>" + nameInput + "</li>");
		$("#testname").append("<hr>");
		
		$("#testname li").last().click(function() {
			$("#testname2").text("");
			$("#testname2").append("<li>"+newPlace.location+"</li>");
			$("#testname2").append("<li>"+newPlace.time+"</li>");
			$("#testname2").append("<li>"+newPlace.description+"</li>");
		});
		$("#input")[0].reset();
	});
});


    


