# exercise: Hello File Server

## Objective

To understand how to use the Express.js library to create a back-end file server.

## Learning

In this exercise we will be creating a server that serves any static files, such as HTML, CSS, or JavaScript.

## Achieving

In this exercise, you will create a simple file server using Express.js, use that server to access files on a web host, and then limit the files which are served to only those within a specific folder.

## Procedure

### Create a Server with Express

- [ ] Install the project's dependencies using `npm install`
- [ ] Start the server by running `index.js` using `npm run dev`.
- [ ] Visit your running server at `http://localhost:3000` with a web browser.

### Sending a file

- [ ] Did you get this error? `Cannot GET /`
- [ ] In your server, you will need to set up an index route.
- [ ] In the index route's callback function, rather than the `send` method on `response`, you will need to use `sendFile`
- [ ] `sendFile` takes a directory path as its argument.
- [ ] You can utilize a node script `__dirname` that will _return the path of the folder where the server currently resides._
```js
response.sendFile(__dirname + "/example.html")
```
### Limit the Express server to a `public` directory

- [ ] Create a directory named `public` within your project directory.
- [ ] Inside `public` create a new file named `index.html`. Inside, use your Emmet abbreviation to create the HTML boiler plate. Have this HTML file display a greeting to the user.
- [ ] Update the `index.js` file to limit visitor access to the `public` directory. You will set up the `use` method on `app`.

```js
app.use(express.static('public'))
```

### Add more files to serve

- [ ] Create at least two more HTML files within the `public` directory.
- [ ] Create links on the `index` page so that users can navigate to the new pages.
- [ ] Set up GET routes in your `index.js` and send your new HTML files as response.

###

## Review

In this exercise, you practiced creating an Express back-end server that can send arbitrary files from the server to a browser client. You created a default page for the server to send, as `index.html`, and also created additional files that can be visited from the `index.html` or directly.

Your software should:

- Send different HTML files dependent upon the route in the URL.

## Going Further

- How could you use `request.params` to dynamically send different files dependent on the value of the param?

