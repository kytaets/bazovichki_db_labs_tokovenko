/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "73cd5f620e25020798102b09b95027cb"
  },
  {
    "url": "assets/css/0.styles.d0a231c4.css",
    "revision": "5820dbeac25f0201b7eefb0c85a2370c"
  },
  {
    "url": "assets/img/delete-media.1d6f599b.png",
    "revision": "1d6f599b5ffcaaac4434131669fb85da"
  },
  {
    "url": "assets/img/delete-role.ea011976.png",
    "revision": "ea011976de00ef4c3d48f1698ce931fc"
  },
  {
    "url": "assets/img/delete-user.d21076e4.png",
    "revision": "d21076e4b678d14d3e5b4ef02204110b"
  },
  {
    "url": "assets/img/get-media.c042ba27.png",
    "revision": "c042ba27e45f8e34d74119c5bc4189b0"
  },
  {
    "url": "assets/img/get-role-by-id.a5f35954.png",
    "revision": "a5f3595420815e850510fd0e2ce94b41"
  },
  {
    "url": "assets/img/get-roles.59849f63.png",
    "revision": "59849f63c50be852eeb38a93f0e89c0a"
  },
  {
    "url": "assets/img/get-user-by-id.73b80333.png",
    "revision": "73b80333e4dce8f44064a37782918d88"
  },
  {
    "url": "assets/img/get-users.d1bf4173.png",
    "revision": "d1bf41736997917f74cd06a0f5d1b2bc"
  },
  {
    "url": "assets/img/media-DataMissingException.7e12bfb8.png",
    "revision": "7e12bfb83e9546ffbdcdc0ba5d6c8ff3"
  },
  {
    "url": "assets/img/media-NoPermissionException.36bce8c0.png",
    "revision": "36bce8c09813cd012ba6fe93632cc7fa"
  },
  {
    "url": "assets/img/media-UserNotFoundException.6adb9589.png",
    "revision": "6adb958962d46c75992836893cae6ad7"
  },
  {
    "url": "assets/img/patch-media.9ad3d821.png",
    "revision": "9ad3d82165922e2a5e71c87e552f4d13"
  },
  {
    "url": "assets/img/patch-role.d786a1f9.png",
    "revision": "d786a1f9b8810431b8f7df39a94ce425"
  },
  {
    "url": "assets/img/patch-user.3fdbe56a.png",
    "revision": "3fdbe56a79d1050a31ea48cd71d8056c"
  },
  {
    "url": "assets/img/post-media.3ec8697e.png",
    "revision": "3ec8697e18ffbcb00b259ea08a8efee9"
  },
  {
    "url": "assets/img/post-role.7db6cd4b.png",
    "revision": "7db6cd4b29f7c9246a497bf47f903792"
  },
  {
    "url": "assets/img/post-user.f0ef1d3e.png",
    "revision": "f0ef1d3e3f9562bc1d46109fddf86d3f"
  },
  {
    "url": "assets/img/relational_schema.ce95178e.png",
    "revision": "ce95178e03036cd4d2d2ffe1a92aaba3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/user-AlreadyExistsException.05cad60f.png",
    "revision": "05cad60f7dccf25f8f334b2ef3e364f5"
  },
  {
    "url": "assets/img/user-NotFoundException.aa46d3c8.png",
    "revision": "aa46d3c82ab817f424365ebee2554713"
  },
  {
    "url": "assets/img/user-RoleNotFoundException.b64ea3c7.png",
    "revision": "b64ea3c70c6871cd94b61206ae8dd8a8"
  },
  {
    "url": "assets/js/1.63031c22.js",
    "revision": "00eb3245bbc45a425750a9d5e756ce9a"
  },
  {
    "url": "assets/js/10.0bae72b7.js",
    "revision": "c9aa0d3a44f28f02ee85f7601de5c80d"
  },
  {
    "url": "assets/js/13.b23a3b7e.js",
    "revision": "dd69f8efa54702f70cebdf79759ded08"
  },
  {
    "url": "assets/js/14.64de6efe.js",
    "revision": "3f81d4a316db91c9052b4e7239e232f9"
  },
  {
    "url": "assets/js/15.9a8b2228.js",
    "revision": "e4d9c05e82300d1ebce18d498f9e7104"
  },
  {
    "url": "assets/js/16.370bb3a4.js",
    "revision": "c5d5327c09eb3a0b0b4fc7cafb4ddc6a"
  },
  {
    "url": "assets/js/17.d0fc2b21.js",
    "revision": "ca5a7b0472b29a86d9a4f19f0ed55d76"
  },
  {
    "url": "assets/js/18.683b0ef6.js",
    "revision": "6fded6faef3fb77b2b6923df354479b5"
  },
  {
    "url": "assets/js/19.13968eca.js",
    "revision": "89324cdac03f6041cbae06c07d3c7a02"
  },
  {
    "url": "assets/js/2.88668aac.js",
    "revision": "9482d554bdf349f8a3eab3f62782517b"
  },
  {
    "url": "assets/js/20.52d641a6.js",
    "revision": "5b66543da2ebc0122de32af08afc4dd6"
  },
  {
    "url": "assets/js/21.54f9aba9.js",
    "revision": "7bed3a47682619fa8bd81ec95055b0fb"
  },
  {
    "url": "assets/js/22.dc03de06.js",
    "revision": "28ab1f0fbc8d390ed45c23151c3cc930"
  },
  {
    "url": "assets/js/23.f3d53322.js",
    "revision": "85fe12bc46a4d9fc4fae3b0b728aa5ed"
  },
  {
    "url": "assets/js/24.a254aed5.js",
    "revision": "17aa0300c40056859d6a872c2b48d43a"
  },
  {
    "url": "assets/js/25.d4f2f693.js",
    "revision": "dca56581da7d8d430c03673c3f7dee15"
  },
  {
    "url": "assets/js/26.56475c71.js",
    "revision": "c5e6e24018c6e6bc17c7c6440419fd34"
  },
  {
    "url": "assets/js/27.373b686e.js",
    "revision": "0e4a9ce22520d3ce7581e2355db20539"
  },
  {
    "url": "assets/js/28.38ea71f5.js",
    "revision": "2238e6728d637f542d3de02ef3919cd1"
  },
  {
    "url": "assets/js/29.fbe59149.js",
    "revision": "ee16a8aa8b170746364d7b2280da7491"
  },
  {
    "url": "assets/js/3.e786534f.js",
    "revision": "4e12a82d437e00a713ac4b204b7bafd3"
  },
  {
    "url": "assets/js/30.a6080310.js",
    "revision": "571d9d9a7dce927f2991672adfe381cd"
  },
  {
    "url": "assets/js/31.948e407f.js",
    "revision": "c7b2027c6f76ad3c7c4e3d8a0db956d8"
  },
  {
    "url": "assets/js/32.0e9af9d6.js",
    "revision": "247fb07e2ec01d4d632bd4d31a8985f7"
  },
  {
    "url": "assets/js/33.5ab3374d.js",
    "revision": "ba0f892eba2e2ea10fb11b38f9eb5402"
  },
  {
    "url": "assets/js/34.4a121d7a.js",
    "revision": "2cad6fb2fc9ff53a47377c7f90aaf676"
  },
  {
    "url": "assets/js/35.fa2e9a65.js",
    "revision": "1c610c6b1129a9ed4ae0c64ce9886853"
  },
  {
    "url": "assets/js/36.e2641596.js",
    "revision": "729f78ba92dd451a0b85425f07f310cb"
  },
  {
    "url": "assets/js/37.edf2e145.js",
    "revision": "107499e8aa87ef001f52e4afd55523a2"
  },
  {
    "url": "assets/js/38.46bbd21d.js",
    "revision": "b0849aff14599984eb2d7606cfc06664"
  },
  {
    "url": "assets/js/39.01194dfd.js",
    "revision": "44cef0c4259ae365807eaccf80cf74fa"
  },
  {
    "url": "assets/js/4.937fec11.js",
    "revision": "1e445134c2e7d2d02f43fe6bb6a614e3"
  },
  {
    "url": "assets/js/41.b918b4f2.js",
    "revision": "110a61ac6457c95aa6bc5016163384a4"
  },
  {
    "url": "assets/js/5.b5d90715.js",
    "revision": "26c1465cacab7ac845381fd8f5d1a0b9"
  },
  {
    "url": "assets/js/6.bee5dad3.js",
    "revision": "4fa620f8c4b7b9de5cc7b2c137af61bf"
  },
  {
    "url": "assets/js/7.dddce0fd.js",
    "revision": "ecbb2eae37cfc367a72aa676b985af98"
  },
  {
    "url": "assets/js/8.fb8f9b6d.js",
    "revision": "080bc0fc69963a9e696d4c92948ea916"
  },
  {
    "url": "assets/js/9.c784e858.js",
    "revision": "84131bd0526a36efda7220ac1c5fe3c1"
  },
  {
    "url": "assets/js/app.7e9d2ca0.js",
    "revision": "5e60a280f842006d2738fe242c85d60a"
  },
  {
    "url": "assets/js/vendors~docsearch.a2c3a6ae.js",
    "revision": "2987c8776d2ffec467d29bd2b1d698e4"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4f80b4861fc4e833fbea597aba9dc315"
  },
  {
    "url": "design/index.html",
    "revision": "490ebae194fa6753d4f671070ce5e4ef"
  },
  {
    "url": "index.html",
    "revision": "e1bdf6b5f3057e13e4415206084d0666"
  },
  {
    "url": "intro/index.html",
    "revision": "869a4d8a6213a9dad8939073e1a5a93b"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "bfeeb84fa496e1232ce48b3c2a9000d4"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "9eb0e26521fe53cbb87c5d262d8bae1a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6c442c091feba20aab47392c727f9b7a"
  },
  {
    "url": "software/index.html",
    "revision": "69fabdb0753995e3dc9741756774db3b"
  },
  {
    "url": "test/index.html",
    "revision": "a53537bdb6598b197c7baf19cbd5d5a9"
  },
  {
    "url": "use cases/index.html",
    "revision": "a6717760d37214b6cf55260c8657cd5f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
