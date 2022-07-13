
/**
 * @roxi/routify 2.18.8
 * File generated Wed Jul 13 2022 15:57:19 GMT+0530 (India Standard Time)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-07-13T10:27:19.095Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/app/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/HP/OneDrive/Desktop/Stepzen/stepzen_frontend/src/pages/app/_layout.svelte",
      "children": [
        {
          "isFile": false,
          "isDir": true,
          "file": "order",
          "filepath": "/app/order",
          "name": "order",
          "ext": "",
          "badExt": false,
          "absolutePath": "C:/Users/HP/OneDrive/Desktop/Stepzen/stepzen_frontend/src/pages/app/order",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "[id].svelte",
              "filepath": "/app/order/[id].svelte",
              "name": "[id]",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "C:/Users/HP/OneDrive/Desktop/Stepzen/stepzen_frontend/src/pages/app/order/[id].svelte",
              "importPath": "../src/pages/app/order/[id].svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/app/order/:id",
              "id": "_app_order__id",
              "component": () => import('../src/pages/app/order/[id].svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/app/order/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "C:/Users/HP/OneDrive/Desktop/Stepzen/stepzen_frontend/src/pages/app/order/index.svelte",
              "importPath": "../src/pages/app/order/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/app/order/index",
              "id": "_app_order_index",
              "component": () => import('../src/pages/app/order/index.svelte').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/app/order"
        },
        {
          "isFile": false,
          "isDir": true,
          "file": "toppings",
          "filepath": "/app/toppings",
          "name": "toppings",
          "ext": "",
          "badExt": false,
          "absolutePath": "C:/Users/HP/OneDrive/Desktop/Stepzen/stepzen_frontend/src/pages/app/toppings",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "[id].svelte",
              "filepath": "/app/toppings/[id].svelte",
              "name": "[id]",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "C:/Users/HP/OneDrive/Desktop/Stepzen/stepzen_frontend/src/pages/app/toppings/[id].svelte",
              "importPath": "../src/pages/app/toppings/[id].svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/app/toppings/:id",
              "id": "_app_toppings__id",
              "component": () => import('../src/pages/app/toppings/[id].svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/app/toppings/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "C:/Users/HP/OneDrive/Desktop/Stepzen/stepzen_frontend/src/pages/app/toppings/index.svelte",
              "importPath": "../src/pages/app/toppings/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/app/toppings/index",
              "id": "_app_toppings_index",
              "component": () => import('../src/pages/app/toppings/index.svelte').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/app/toppings"
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/app/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/app",
      "id": "_app__layout",
      "component": () => import('../src/pages/app/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/HP/OneDrive/Desktop/Stepzen/stepzen_frontend/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "register.svelte",
      "filepath": "/register.svelte",
      "name": "register",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/HP/OneDrive/Desktop/Stepzen/stepzen_frontend/src/pages/register.svelte",
      "importPath": "../src/pages/register.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/register",
      "id": "_register",
      "component": () => import('../src/pages/register.svelte').then(m => m.default)
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

