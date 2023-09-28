import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedProducts: [
    {
      "id": 1,
      "attributes": {
      "productTitle": "Jacket",
      "productPrice": 29.99,
      "productDeciption": "jfksajflkjahglalfs",
      "category": "men",
      "productRating": 5,
      "createdAt": "2023-09-18T21:16:44.806Z",
      "updatedAt": "2023-09-19T04:23:17.313Z",
      "publishedAt": "2023-09-19T04:23:17.307Z",
      "productimg": {
      "data": [
      {
      "id": 1,
      "attributes": {
      "name": "images.jpg",
      "alternativeText": null,
      "caption": null,
      "width": 899,
      "height": 921,
      "formats": {
      "thumbnail": {
      "name": "thumbnail_images.jpg",
      "hash": "thumbnail_images_d29a99a2b2",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "path": null,
      "width": 152,
      "height": 156,
      "size": 3.77,
      "url": "/uploads/thumbnail_images_d29a99a2b2.jpg"
      },
      "small": {
      "name": "small_images.jpg",
      "hash": "small_images_d29a99a2b2",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "path": null,
      "width": 488,
      "height": 500,
      "size": 25.85,
      "url": "/uploads/small_images_d29a99a2b2.jpg"
      },
      "medium": {
      "name": "medium_images.jpg",
      "hash": "medium_images_d29a99a2b2",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "path": null,
      "width": 732,
      "height": 750,
      "size": 55.51,
      "url": "/uploads/medium_images_d29a99a2b2.jpg"
      }
      },
      "hash": "images_d29a99a2b2",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "size": 84.68,
      "url": "/uploads/images_d29a99a2b2.jpg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "createdAt": "2023-09-19T04:22:37.203Z",
      "updatedAt": "2023-09-19T04:22:37.203Z"
      }
      },
      {
      "id": 2,
      "attributes": {
      "name": "final.png",
      "alternativeText": null,
      "caption": null,
      "width": 623,
      "height": 642,
      "formats": {
      "thumbnail": {
      "name": "thumbnail_final.png",
      "hash": "thumbnail_final_218c8e119c",
      "ext": ".png",
      "mime": "image/png",
      "path": null,
      "width": 151,
      "height": 156,
      "size": 25.06,
      "url": "/uploads/thumbnail_final_218c8e119c.png"
      },
      "small": {
      "name": "small_final.png",
      "hash": "small_final_218c8e119c",
      "ext": ".png",
      "mime": "image/png",
      "path": null,
      "width": 485,
      "height": 500,
      "size": 222.39,
      "url": "/uploads/small_final_218c8e119c.png"
      }
      },
      "hash": "final_218c8e119c",
      "ext": ".png",
      "mime": "image/png",
      "size": 86.63,
      "url": "/uploads/final_218c8e119c.png",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "createdAt": "2023-09-19T04:22:37.273Z",
      "updatedAt": "2023-09-19T04:22:37.273Z"
      }
      }
      ]
      }
      }
      }
  ],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      // state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {incrementByAmount } = counterSlice.actions

export default counterSlice.reducer