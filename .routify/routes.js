
/**
 * @roxi/routify 2.18.8
 * File generated Tue Jul 12 2022 14:19:16 GMT+0530 (India Standard Time)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-07-12T08:49:16.861Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isDir": true,
      "children": [
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isPage": true,
              "path": "/app/order/:id",
              "id": "_app_order__id",
              "component": () => import('../src/pages/app/order/[id].svelte').then(m => m.default)
            },
            {
              "isIndex": true,
              "isPage": true,
              "path": "/app/order/index",
              "id": "_app_order_index",
              "component": () => import('../src/pages/app/order/index.svelte').then(m => m.default)
            }
          ],
          "path": "/app/order"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isPage": true,
              "path": "/app/toppings/:id",
              "id": "_app_toppings__id",
              "component": () => import('../src/pages/app/toppings/[id].svelte').then(m => m.default)
            },
            {
              "isIndex": true,
              "isPage": true,
              "path": "/app/toppings/index",
              "id": "_app_toppings_index",
              "component": () => import('../src/pages/app/toppings/index.svelte').then(m => m.default)
            }
          ],
          "path": "/app/toppings"
        }
      ],
      "isLayout": true,
      "path": "/app",
      "id": "_app__layout",
      "component": () => import('../src/pages/app/_layout.svelte').then(m => m.default)
    },
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isPage": true,
      "path": "/register",
      "id": "_register",
      "component": () => import('../src/pages/register.svelte').then(m => m.default)
    }
  ],
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

