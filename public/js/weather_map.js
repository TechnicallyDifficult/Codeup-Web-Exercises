$(document).ready(function () {
	const APPID = '7f8e3aa0aad113510e0c1eaafd1c17b8';
	var url = 'http://api.openweathermap.org/data/2.5/forecast/daily';
	var latitude = parseFloat($('#lat-input').val());
	var longitude = parseFloat($('#lon-input').val());
	var mapOptions = {
		zoom: 10,
		center: {
			lat: latitude,
			lng: longitude
		}
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var marker = new google.maps.Marker({
		position: {
			lat: latitude,
			lng: longitude
		},
		map: map,
		animation: google.maps.Animation.DROP,
		draggable: true
	});

	function getWeather(Lat, Lon) {
		$.get(url, {
			APPID: APPID,
			lat: Lat,
			lon: Lon,
			cnt: 3,
			units: 'imperial'
		}).fail(function(data, status) {
			console.log(status);
			$.alert({
				title: 'Uh oh!',
				content: 'Failed to load! See console for details.',
				type: 'red',
				backgroundDismiss: true,
				animationBounce: 1.5,
				buttons: {
					close: function () {}
				}
			});
		}).done(function(data) {
			console.log(data);
			renderForecast(data.city.name, data.list);
		});
	}

	function renderForecast(cityName, list) {
		$('#forecast-container').html('<h4>' + (cityName ? cityName : 'No city selected') + '</h4>');
		list.forEach(function (element, index, array) {
			$('#forecast-container').append('<div class="day-forecast"><h4>' + Math.round(element.temp.max) + '°F / ' + Math.round(element.temp.min) + '°F</h4>' + '<p class="icon"><img src="http://openweathermap.org/img/w/' + element.weather[0].icon + '.png"></p>' + '<p><strong>' + element.weather[0].main + ':</strong> ' + element.weather[0].description + '</p><p><strong>Humidity:</strong> ' + element.humidity + '%</p><p><strong>Wind:</strong> <span>' + element.speed + 'mph</p><p><strong>Pressure:</strong> ' + element.pressure +'hPa</p></div>');
		});
	}

	getWeather(29.42412, -98.493629);

	$('#get-weather').click(function () {
		latitude = parseFloat($('#lat-input').val()),
		longitude = parseFloat($('#lon-input').val());
		if (isNaN(latitude) || isNaN(longitude)) {
			$.alert({
				title: 'Invalid Location',
				content: 'Please input valid latitude and longitude values.',
				type: 'red',
				backgroundDismiss: true
			});
		} else {
			getWeather(latitude, longitude);
		}
	});

	google.maps.event.addListener(marker, 'dragend', function(evt){
		latitude = parseFloat(evt.latLng.lat());
		longitude = parseFloat(evt.latLng.lng());
		$('#lat-input').val(latitude);
		$('#lon-input').val(longitude);
		getWeather(latitude, longitude);
	});
});