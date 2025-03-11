'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "02cfe05ef9c57855245aa8febd68b5de",
"version.json": "d04bf51fbb26f6a7180bca882b07739b",
"index.html": "87405220f2737c8c3581975038f29d56",
"/": "87405220f2737c8c3581975038f29d56",
"main.dart.js": "9df508a0029687b70a4002b47fa6f6d3",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "514fb35bb307ec5247fa1950aaee0aac",
"assets/AssetManifest.json": "f508212c50a29d0c4abc0c8f65fa4990",
"assets/NOTICES": "d61712f9a889e73ff328da0fe740ba07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fc6154646a7dc647cd62cc70d0ae08de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "dd3690cfcb779064a6d53096bf882a59",
"assets/fonts/MaterialIcons-Regular.otf": "472e7a11deedb63f56ee085140a03031",
"assets/assets/promax_parameter01.jpg": "d6dfb4f21e33badf3ee052086a30cfff",
"assets/assets/drysrcews01.jpg": "825e1448fbb2b095bf043de45c131816",
"assets/assets/promax_ceiling_angle01.jpg": "b7c1007928a735164fbbc68e24af30fb",
"assets/assets/expo_inter01.jpg": "958e29c51d384ed2279e16e4a782d701",
"assets/assets/70mm01.jpg": "69183cb6f2f9612db27cadd229f9701b",
"assets/assets/expo_ceiling_angle01.jpg": "bd0b48fdc7bf64667e2fc57d474fda56",
"assets/assets/ecpo_paramter01.jpg": "582aa40f016439d8a3049e9f09a5830c",
"assets/assets/boards01.jpg": "51df916e64637ae50681dcf1772e0627",
"assets/assets/dinamo_parameter01.jpg": "f90b58a8c7c65ccd54bea291e6271a95",
"assets/assets/dinamo_ceiling_angle01.jpg": "7f6a1bbb3a876db57ea3e2c743fbbf74",
"assets/assets/promax_ceiling_section01.jpg": "b7d2b57a860d2745f26b93b46fd6cadc",
"assets/assets/gyplife_boards.jpg": "0ad966a908200766e386ee16bb466ecc",
"assets/assets/slide_image1.jpg": "75bc44b9085730e5d91c2ad9293f9dd0",
"assets/assets/powder01.jpg": "23492780d7eae860cfa19b1cee12e405",
"assets/assets/hero1_background.jpg": "aae35e85995d791705d8bf749926af3b",
"assets/assets/logo1.png": "ded7bb08336633bb949efc795bf23eb6",
"assets/assets/50mm01.jpg": "cd7c3828d08940411bbc6a58ab502044",
"assets/assets/grid01.jpg": "020cb9a3049daa16d99e72683fa7c735",
"assets/assets/ancor_bolts01.jpg": "829f8e104ccf4a06e05ef2acb4fa37f5",
"assets/assets/slider_image1.jpg": "13e491f9abc172bc326a5edd7dfed4d9",
"assets/assets/tape01.jpg": "3e80e77f8826415ad5a53bbffb9ef61b",
"assets/assets/slider_image2.jpg": "33744ede1624cbbeca358277da5c0750",
"assets/assets/homepage3.jpg": "511fe6541fd7457002a3c80d8f2c9f59",
"assets/assets/hero2_background.jpg": "0b7e5494ce6228b30711bda3b3a926e5",
"assets/assets/dinamo_ceiling_section01.jpg": "7393fa993c4ed932b659ebf216df8131",
"assets/assets/homepag.jpg": "f5ca20c18c407507f0d78d8973177107",
"assets/assets/homepage2.jpg": "5c23ec6fff109e13f5812ed07a96353b",
"assets/assets/about3.jpg": "c3f5a9a7f24c3d98fb8528dc8ae01d1a",
"assets/assets/contact2.jpg": "1b81da744af35dcb2184130d1620a73b",
"assets/assets/about2.jpg": "85e4d16bc114f7ca2c24087ef3776f2f",
"assets/assets/homepage1.jpg": "a04fa9d9bc4bac84fbe77ba8006717dc",
"assets/assets/homepage5.jpg": "934bfa6aae49078a502403bbcf07b465",
"assets/assets/dinamo_inter01.jpg": "41718ebee7261c029888a6f85e7ad36e",
"assets/assets/homepage6.jpg": "d0970708513225e7e0534d6f067430c9",
"assets/assets/expo_ceiling_section01.jpg": "5e0ab374e3ede1462d497b6e13f699ed",
"assets/assets/contract1.jpg": "e84bebeac52b8c85e7eb434e0d2d3700",
"assets/assets/promax_inter01.jpg": "d873ccbf00d9748a66b23ce30b35fb7b",
"assets/assets/hero_background.jpg": "9e5be0c5667d9b5855e78c299b613cfa",
"assets/assets/homepage7.jpg": "01fb42db0eb7e04343accb32048dd0ae",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
