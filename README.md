
# DALL.E.Clone

DALL-E-Clone generate image based on your text/prompt given to the application



## Features

- Generates Images using AI 
- Uses OpenAI APIs to generate images
- MongoDB to store the output
- Uploaded to Cloudinary
- User can download the generated images
- Share images with community
- Tailwind CSS



## Run Locally

Clone the project

```bash
  git clone https://github.com/UjwalPatel05/DALL-E-Clone.git
```

Install dependencies for both Client and Server Folder

```bash
  npm install
```

Setup .env file in Server Folder
```bash
OPENAI_API_KEY =
MONGODB_URL = 
CLOUDINARY_CLOUD_NAME = 
CLOUDINARY_API_KEY = 
CLOUDINARY_API_SECRET = 

```

Start the server for both Client and Server

```bash
  Client: npm start
  Server: nodemon index.js
```


## Screenshots

Dashboard
![Dashboard](https://res.cloudinary.com/djstjnl11/image/upload/v1704868093/klpn6cuylivjlnxawy65.png)

![Dashboard](https://res.cloudinary.com/djstjnl11/image/upload/v1704868092/pf9wqfii1ubjub28g5kc.png)

Create Image by giving prompt text and click on share with the community button to share the generated image with community
![Create](https://res.cloudinary.com/djstjnl11/image/upload/v1704868088/fmrqwtflzsydyxwavxml.png)

## Tech Stack

**Client:** React JS, tailwindcss

**Server:** Node JS, Express JS, MongoDB, OpenAI, Cloudnary



