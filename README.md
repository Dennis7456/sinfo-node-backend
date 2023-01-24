# sinfo-node-backend

This is a backend REST api that consumes data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

This application is built with [ExpressJS](https://expressjs.com/) and and [NodeJS](https://nodejs.org/) and is available on [Node-Backend-Link](link.to.heroku.project).

## Links to fetch data
1. Users
- Get all [users](/users)
- Get a single [user](/users/id) e.g [user 7]()

2. Posts
- Get all [posts](/posts) 
- Get a Single [post](/post/id)
- Delete a single [post](/delete_posts/id) e.g [post 7](post/id)
- A single user's [posts](/user_posts/id) e.g [user 7](/users/id)
- Comments related to a [post](/post_comments/id) e.g [post 7](post/id)

3. Comments
- Get all [comments](/comments)
- Get a single [comment](/comments/id)
- Delete a single [comment](/delete_comments/comment_id) e.g [comment 8](/comments/id)
- Get a single [post's]() comments e.g [comment 8](/comments/id)

4. Albums
- Get all [albums](/albums)
- Get a single [post](/albums/id) e.g [album 12](/albums/id)
- Delete an [album]() e.g [album](delete_albums/id)
- Get a user's albums e.g [user 9](/user_albums/id)
- Get an album's photos e.g [album 17](/album_photos/id)

5. Photos
- Get all [photos](/photos)
- Get a single photo e.g [photo 5](/photos/id)
- Delete a single photo e.g [photo 19](/delete_photos/id)

