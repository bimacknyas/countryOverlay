$("#aZBtn").click(function() {
  $("#aZSort").show();
  $("#regionSort").hide();
  $("#aZBtn").addClass("active");
  $("#regionBtn").removeClass("active");
});
$("#regionBtn").click(function() {
  $("#aZSort").hide();
  $("#regionSort").show();
  $("#aZBtn").removeClass("active");
  $("#regionBtn").addClass("active");
});
$(document).ready( function() {
	$.getJSON( "countryDataV2.json", function(data) { 
		$.each(data, function(key, val) {
		  if (!$("#aZContent ul." + val.code).is("*")) {
			$("<ul />", {
			  "class": val.code,
			  "html": "<li>" + val.name + "</li>"
			})
			.appendTo("#aZContent")
			.before('<b class=' + val.code + ' ><a name="' + val.code + '" >' + val.code + '</a></b>');
		  } else {
			$("b." + val.code).each(function() {
			  if (this.textContent === val.code) {
				$(this).next("ul").append("<li>" + val.name + "</li>");
			  }
			})
		  }
		});
	});
	$.getJSON( "countryDataV2.json", function(obj) { 
		$.each(obj, function(key, value) { 
			$("#regionSort ul").append("<li>"+value.name+"</li>");
		});
	});
});