self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open('review-caches').then(function(cache){
			return cache.addAll([
				'/',
				'/js/main.js',
				'/js/restaurant_info.js',
				'/js/dbhelper.js',
				'/data/restaurants.json',
				'/css/styles.css',
				'/img/1.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/img/10.jpg',
				]);
		})
		);
});

self.addEventListener('fetch', function(event){
	event.respondWith(
		caches.match(event.request).then(function(response){
			if(response) return response;
			return fetch(event.request);
		})
	);
});
