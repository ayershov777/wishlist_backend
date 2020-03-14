# wishlist_backend

## Routes

### Wishlists  
GET     /:username          get all wishlists  
GET     /:username/:title   get one wishlist  
POST    /:username          create new wishlist, specify title in request body  
DELETE  /:username          remove wishlist, specify index in request body  
### Wishes  
GET     /:username/:title   get all wishes in a list  
POST    /:username/:title   add new wish new wishlist, specify wish in request body  
PUT     /:username/:title   update a wish in the wishlist, specify index in request body  
DELETE  /:username/:title   delete a wish from the wishlist, specify index in the request body
### Users
POST    /users              create new user, specify username in request body