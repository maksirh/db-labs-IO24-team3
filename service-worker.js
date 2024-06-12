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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "7903708eb9669dea9aff589d1c5126e4"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.0a32b199.css",
    "revision": "958a8e92e1c85ccec03f2c4f1a85530f"
  },
  {
    "url": "assets/img/addrequest.916fa13b.png",
    "revision": "916fa13b119ca3403d97092e76a04586"
  },
  {
    "url": "assets/img/allrequest.7bcacad4.png",
    "revision": "7bcacad435c39f6333b485389ca562c0"
  },
  {
    "url": "assets/img/allrequestafter.508e98cd.png",
    "revision": "508e98cd7e8099a0ba16d1fb5b8731f6"
  },
  {
    "url": "assets/img/allusers.11a9ca26.png",
    "revision": "11a9ca26dfa87650f23483b62336eb4a"
  },
  {
    "url": "assets/img/allusersafter.171a8c8a.png",
    "revision": "171a8c8a22fa069aaa3009090131743f"
  },
  {
    "url": "assets/img/allusersafter2.37051671.png",
    "revision": "37051671ebd22345b625d56e1af02585"
  },
  {
    "url": "assets/img/deleteuser.a8be0b29.png",
    "revision": "a8be0b296d232461a3b91084100894c2"
  },
  {
    "url": "assets/img/relayshema.e5a2192d.png",
    "revision": "e5a2192d15b9948462f4d71eea65120f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/updateuser.bad0aa70.png",
    "revision": "bad0aa701c2b9c2647419612a3f35c44"
  },
  {
    "url": "assets/img/userid.bc335414.png",
    "revision": "bc33541448e0e15e30d7e97e77b50232"
  },
  {
    "url": "assets/js/1.3fcc3749.js",
    "revision": "97fd18b4212ae1036261b470bd96cd93"
  },
  {
    "url": "assets/js/10.f9d6c906.js",
    "revision": "4dd068e1299b8d7729db22fa91a93a69"
  },
  {
    "url": "assets/js/13.b7046137.js",
    "revision": "d6993872a9ad10a3c7758027a29c89c1"
  },
  {
    "url": "assets/js/14.fa140684.js",
    "revision": "0bd24ca1f3c64e740404d8775d2d02e8"
  },
  {
    "url": "assets/js/15.6e89d410.js",
    "revision": "2e7250645916b920ea40883cdd8a40d1"
  },
  {
    "url": "assets/js/16.6779f3b0.js",
    "revision": "80b14dd255da1f68321a535bb8654124"
  },
  {
    "url": "assets/js/17.58b864fe.js",
    "revision": "856a16103b9a2cdd996c2fd42efc915f"
  },
  {
    "url": "assets/js/18.bbb3bd3c.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.9b8f087f.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.9cb29ce8.js",
    "revision": "6eba3342dc7be1d8c5810acccbab46f6"
  },
  {
    "url": "assets/js/20.1604d19f.js",
    "revision": "6b44b4df3d8d58ba0781b59b9d8d236e"
  },
  {
    "url": "assets/js/21.0233abe4.js",
    "revision": "d2f1718a96166ad02d5dabac21facd89"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.2eb72898.js",
    "revision": "b782e2f9393259d4e5d41221516457e8"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.e5459862.js",
    "revision": "dc642be34991c45b3789d4655eeeed48"
  },
  {
    "url": "assets/js/27.2b1eaa27.js",
    "revision": "c4b219d55b3cd5b019469d6a06af3b73"
  },
  {
    "url": "assets/js/28.9c7e544c.js",
    "revision": "0668505b719cba3ca78b7e32dae60fc5"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.eb438de8.js",
    "revision": "efb2681b26d997cceacd042bb5742de7"
  },
  {
    "url": "assets/js/31.8c06fd9e.js",
    "revision": "4048b957d0df391aa1f58868f7358c64"
  },
  {
    "url": "assets/js/32.fa418623.js",
    "revision": "1e271546d558a5e1ef85e3b51f2528bc"
  },
  {
    "url": "assets/js/33.2523105e.js",
    "revision": "1dd4bca15ca7ae4fa03cb18360f21aa2"
  },
  {
    "url": "assets/js/34.d3207739.js",
    "revision": "c7f74cb93e1553a2ff603362940cb460"
  },
  {
    "url": "assets/js/35.97bbb69b.js",
    "revision": "abf89bb5c5fa49f97006e3b5c7aab3b1"
  },
  {
    "url": "assets/js/36.85fa7926.js",
    "revision": "d731607bc212acd1f35aaefcd6eab32f"
  },
  {
    "url": "assets/js/37.7d97d6d0.js",
    "revision": "db60bab09aee54ca9a5f299c3c00637e"
  },
  {
    "url": "assets/js/38.60f1b596.js",
    "revision": "21cb7967c9347afecefc68fcb93b51d2"
  },
  {
    "url": "assets/js/39.e64d7645.js",
    "revision": "a5aca31a1088b3a993fca1b2b07a2436"
  },
  {
    "url": "assets/js/4.72741620.js",
    "revision": "d34ede7b8fa3e8e420ae105929d7d9d5"
  },
  {
    "url": "assets/js/41.228f1276.js",
    "revision": "c621079cddffe344aebf0cef0c3176ab"
  },
  {
    "url": "assets/js/5.f9d2a48e.js",
    "revision": "2b749c5e60bede73d8d3df279a7449e3"
  },
  {
    "url": "assets/js/6.f2cb3d5d.js",
    "revision": "cac9306e7a49bdb555b031b6e3553c20"
  },
  {
    "url": "assets/js/7.a70ea1ce.js",
    "revision": "465b16c3c31fbcf2630cfd02104b7eaa"
  },
  {
    "url": "assets/js/8.3b4d8728.js",
    "revision": "b4b900fd079dbda46f781d5f92c36133"
  },
  {
    "url": "assets/js/9.2be1eb08.js",
    "revision": "d6046be85d431c2b7671649f6a064224"
  },
  {
    "url": "assets/js/app.3d65348f.js",
    "revision": "0e7edaad2a1607760672610ea1b9b571"
  },
  {
    "url": "assets/js/vendors~docsearch.37bb06f6.js",
    "revision": "d38e622911e87af68d3279de7ee224a3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8aa2bda28069adac1813d3d5f5cf97d0"
  },
  {
    "url": "design/index.html",
    "revision": "be33d46f45bfc9abcfe266999529f297"
  },
  {
    "url": "index.html",
    "revision": "1e049dad24f9c4d51c3ba6f2507dc6d4"
  },
  {
    "url": "intro/index.html",
    "revision": "79bc752ec1caf88605ef949d9ba9a6a7"
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
    "revision": "18c1105543ea34aae30a6ff2416b2c4e"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "42fa5cddf39141867f6ce00aa496e244"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "eba4112619f147baac303ac180862717"
  },
  {
    "url": "software/index.html",
    "revision": "776a591bbcc126d547135c7dbe80e7e7"
  },
  {
    "url": "test/index.html",
    "revision": "2791c760f297cbd914c2164545f13ef5"
  },
  {
    "url": "use cases/index.html",
    "revision": "ab74c55cf0925859628da536c23d0efb"
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
