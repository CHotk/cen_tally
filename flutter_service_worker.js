'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ec1bdf2f2554ce76f8de6b7cdc305221",
"assets/AssetManifest.bin.json": "f19a662fa6b2e8ff782e0f22cedbd0dd",
"assets/AssetManifest.json": "ea170d3e915d270a05655a8711d47f8c",
"assets/assets/bg/stardust_night.jpg": "d4b099046bc97dc876dbc0e8b82e5b94",
"assets/assets/logo/logo_240.png": "e4e50a76e09c3a64f748b628ef10dc9d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "65b7f905add9c921e6b30ad3a1cba8e7",
"assets/NOTICES": "4690c0ac4cc8d98d186b3000e2d425f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "18c70f490f8a99f9f3f912774b2b26be",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "0b8090a229a1eb481b6db0731eec93e8",
"globe/index.html": "fc8b229c6b89c784c70d98200b8a1bb6",
"globe/models/flamingo.glb": "59fbc93449a296b83262b1b49bb61db0",
"globe/models/fox.glb": "bb9a8a062c578f4e7531a979ab7d922d",
"globe/models/h/bench.glb": "9fc68ba2722732a134770596fc0ab632",
"globe/models/h/candy-cane-green.glb": "ffd0290e669b15464fc74bcd22e0aa34",
"globe/models/h/candy-cane-red.glb": "03fc9f497efa405d87e32b06566b2a82",
"globe/models/h/gingerbread-man.glb": "f24bb8424a1086f9611fd0edcd8abf28",
"globe/models/h/gingerbread-woman.glb": "302c87947aba3ac2c853959f7ea603d5",
"globe/models/h/lantern.glb": "fc4795247513823b639408961cf71fbe",
"globe/models/h/License-Kenney.txt": "c6c5e0f7427dd642b6ddbec0b2c3b6b3",
"globe/models/h/lights-colored.glb": "fcf6c0422fee071daebfd9e28877a683",
"globe/models/h/nutcracker.glb": "05e9bfbf33e9d2f1bef21d0c38a0ee18",
"globe/models/h/present-a-cube.glb": "d1adc5a1f0e34943323c19b6ead7c4ef",
"globe/models/h/present-a-rectangle.glb": "efde69b2d48195d67d1d68305dabe214",
"globe/models/h/present-a-round.glb": "dfd13792e2ad2afe9a230c5eb5f56afc",
"globe/models/h/present-b-cube.glb": "7b8bb7b654b607ab5195dedee45cb462",
"globe/models/h/present-b-rectangle.glb": "54b06183683efc8788a2671b5c1da979",
"globe/models/h/reindeer.glb": "49416bca99a310a531ca5d45c464f033",
"globe/models/h/rocks-medium.glb": "57f9b67be9da29dfa44c7d81ef5e3c66",
"globe/models/h/sled-long.glb": "c1c9dd94f39dfbad153cf7c6e088924b",
"globe/models/h/sled.glb": "cf63f72f5c6555c6068b020566a9424f",
"globe/models/h/snow-pile.glb": "da0ef15146df69adfbb8308817066bb0",
"globe/models/h/snowman-hat.glb": "af26b988fd518236f1dc64c468919315",
"globe/models/h/snowman.glb": "62ffc934d061a01b24415d7bb45561db",
"globe/models/h/sock-red-cane.glb": "995fe68d42cf203cd489345812c6c523",
"globe/models/h/Textures/colormap.png": "424e7b3559ee5ce3d7073e5859a46551",
"globe/models/h/train-locomotive.glb": "ea0af28654aeac4debbc9c81d81c2811",
"globe/models/h/train-tender.glb": "cb0d67e756f68d440a062ff0d22b21c4",
"globe/models/h/train-wagon-logs.glb": "b60387eb914cdec1f40fd6a673b5682d",
"globe/models/h/train-wagon.glb": "694361f51aea6686cc853c978e3348e9",
"globe/models/h/tree-decorated-snow.glb": "34f1bad4581e354144ed64d9858e4be8",
"globe/models/h/tree-decorated.glb": "fbf50ad216975c3caf0d777a909848f8",
"globe/models/h/tree-snow-a.glb": "661367df32a000886ca45909a7132265",
"globe/models/h/tree-snow-b.glb": "de124c1876a03ac2d6eec49027d27d42",
"globe/models/h/tree-snow-c.glb": "0cfcabf61a365bec28e9a1343695cb26",
"globe/models/h/wreath-decorated.glb": "3fdfb0654fe4b5cca9f8b18bc0973a51",
"globe/models/horse.glb": "ebf4afeb87874d0a1487e7ea687fb529",
"globe/models/p/beaver.glb": "3356e121f37e4de0e6190522f500e5f0",
"globe/models/p/bunny.glb": "6611925df1494480ca1fb241f3a782cc",
"globe/models/p/cat.glb": "25e3fe717f3a883ce8fdcba6666691b1",
"globe/models/p/chick.glb": "0bb493dfdd7b7491b7d6cc1f24a978fa",
"globe/models/p/deer.glb": "956ee3c299e45d0743ebb2965559f5d7",
"globe/models/p/dog.glb": "088e635f836af2bea42132a7e65ff0c8",
"globe/models/p/fox.glb": "eceff6b0b1cdd8ca540c3ecaf05e763e",
"globe/models/p/koala.glb": "1fe4113f455a702d9967cdbb0f6b7f7e",
"globe/models/p/License-Kenney.txt": "9f2eef8bf38d696c6db233d080850ae7",
"globe/models/p/monkey.glb": "f58e37df0c385f840ec018e4fcd57328",
"globe/models/p/panda.glb": "71f01225bb74c451d34e2727117f94b8",
"globe/models/p/parrot.glb": "efaa7a807beb40e7a0a0d890cc160d62",
"globe/models/p/penguin.glb": "6ba1b913dfb371613fed4ed88da1bba4",
"globe/models/p/pig.glb": "95ddd9e7d981ba96a71b3cbbd5e40ba7",
"globe/models/p/polar.glb": "b70ed49dec58c9a995d9fdb1eae51b8f",
"globe/models/p/Textures/colormap.png": "f9a72b72fb1ffe0ddee2df9f7c0a26cb",
"globe/models/parrot.glb": "bc8bf37fadfe91187e60c7a5ee03a141",
"globe/models/stork.glb": "48159434acad3d4fb28e224f898ac127",
"globe/vendor/addons/controls/OrbitControls.js": "fb493b163eb8218d0fa0f27d0e9ac50e",
"globe/vendor/addons/loaders/GLTFLoader.js": "9ad07e47837b4a42f6d69a7ec29dc509",
"globe/vendor/addons/utils/BufferGeometryUtils.js": "00ecb96beafe657ac52dc49813220212",
"globe/vendor/addons/utils/SkeletonUtils.js": "a6891d87fbcc6a12ab4a4d88ef3ab1e4",
"globe/vendor/LICENSE-three.txt": "f655d7763863cf6503d6158421a95175",
"globe/vendor/three.module.min.js": "4d8e72afd9639e074547992bce6a3de3",
"icons/Icon-192.png": "016170a8f7788fecfd99efd24b91d1a8",
"icons/Icon-512.png": "6bbb23b906793636e6d4fe5139eed7e9",
"icons/Icon-maskable-192.png": "fda4029465e8f38edb227840d04028c9",
"icons/Icon-maskable-512.png": "3598b12dae90872361d72f57ad8fe8a4",
"index.html": "3aa312ce13dcc8615b88dd842c3343ab",
"/": "3aa312ce13dcc8615b88dd842c3343ab",
"logo.png": "e4e50a76e09c3a64f748b628ef10dc9d",
"main.dart.js": "ce6797126e3f90f764b402de663d256c",
"main.dart.js_1.part.js": "05231b021f20c3af629a0cd22a55d145",
"main.dart.js_2.part.js": "abddd7e282467cdbad667bda6d4295f7",
"manifest.json": "362e800a3441778076ab3b2cdd6296b6",
"pet/index.html": "2f05927c4ce8f577aa0b6bb794284da3",
"version.json": "4fb093334ce7b7c7614097824b8827ac"};
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
