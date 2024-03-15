
$(window).on('load', function () {
	if ($('#preloader').length) {
		$('#preloader').delay(1000).fadeOut('slow', function () {
			$(this).remove();
		});
	}
})


button1 = document.getElementById("button1");
//$("#button1").on('click', () => {
//	alert('request submitted');
//});





$('#button1').click(function () {


	$.ajax({
		url: "./API1.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lng: $('#longitude').val(),
			lat: $('#latitude').val(),


		},
		success: function (response) {

			console.log(JSON.stringify(response));

			if (response.status.name == "ok") {


				$('#txtDistance').html(response['data']['distance']);
				$('#txtGeonameID').html(response['data']['geonameid']);
				$('#txtName').html(response['data']['name']);


			}

		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log("Please enter latitude and longitude")
		}
	});




});

button2 = document.getElementById("button2");
//$("#button2").on('click', () => {
//	alert('request submitted');
//});


$('#button2').click(function SecondCall() {


	$.ajax({
		url: "./API2.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#selCountry').val(),
			postalcode: $('#postalcode').val(),

		},
		success: function (response) {

			console.log(JSON.stringify(response));

			if (response.status.name == "ok") {


				$('#placeName').html(response['data'][0]['placeName']);
				$('#adminName1').html(response['data'][0]['adminName1']);
				$('#adminName2').html(response['data'][0]['adminName2']);
				$('#adminName3').html(response['data'][0]['adminName3']);
				$('#adminCode1').html(response['data'][0]['adminCode1']);
				$('#adminCode2').html(response['data'][0]['adminCode2']);
				$('#adminCode3').html(response['data'][0]['adminCode3']);
				$('#countryCode').html(response['data'][0]['countryCode']);
				$('#postalcode').html(response['data'][0]['postalcode']);
				$('#lng').html(response['data'][0]['lng']);
				$('#lat').html(response['data'][0]['lat']);


			}

		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
			console.log("Please enter country and postalcode")
		}
	});




});

button3 = document.getElementById("button3");
//$("#button3").on('click', () => {
//	alert('request submitted');
//});



$('#button3').click(function SecondCall() {


	$.ajax({
		url: "./API3.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lng: $('#lng').val(),
			lat: $('#lat').val(),

		},
		success: function (response) {

			console.log(JSON.stringify(response));

			if (response.status.name == "ok") {


				$('#adminCode1').html(response['data'][0]['adminCode1']);
				$('#lng').html(response['data'][0]['lng']);
				$('#distance').html(response['data'][0]['distance']);
				$('#geonameId').html(response['data'][0]['geonameId']);
				$('#toponymName').html(response['data'][0]['toponymName']);
				$('#countryId').html(response['data'][0]['countryId']);
				$('#fcl').html(response['data'][0]['fcl']);
				$('#population').html(response['data'][0]['population']);
				$('#countryCode').html(response['data'][0]['countryCode']);
				$('#name').html(response['data'][0]['name']);
				$('#countryName').html(response['data'][0]['countryName']);
				$('#fcodeName').html(response['data'][0]['fcodeName']);
				$('#adminName1').html(response['data'][0]['adminName1']);
				$('#lat').html(response['data'][0]['lat']);
				$('#fcode').html(response['data'][0]['fcode']);



			}

		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
		}
	});




});

