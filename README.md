# Meme Scraper API

This project is an API that scrapes random memes from a website and serves them to the user. It uses Node.js and Express for the server-side logic and Axios for making HTTP requests.

## Installation

Install my-project with npm.

1. Clone this repository:

```bash
  git clone https://github.com/bramireza/Meme-Scraper-API.git

```

2. Install dependencies:

```bash
  cd Meme-Scraper-API
  npm install
```

3. Crete a `.env` file in the root directory of the project with the following environment variables:

```bash
  MEME_URL = http://www.quickmeme.com
```

4. Start the server

```bash
  npm run start
```

## API Reference

#### Get One Random Meme

| Endpoint              | Method | Description                        |
| :-------------------- | :----- | :--------------------------------- |
| `/api/v1/random-meme` | `GET`  | Returns a random meme image (JPEG) |

#### Get List Categories

| Endpoint              | Method | Description                        |
| :-------------------- | :----- | :--------------------------------- |
| `/api/v1/random-meme/listCategories` | `GET`  | Returns a list categories |

#### Get One Random Meme By tag

| Endpoint                        | Method | Description                                                        |
| :------------------------------ | :----- | :----------------------------------------------------------------- |
| `/api/v1/random-meme/tag/{tag}` | `GET`  | Returns a random meme image (JPEG) that matches the specified tag. |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT = YOUR-PORT-AVAILABLE` (Example: `8000`)

`MEME_URL = http://www.quickmeme.com`

## Usage

### Random Meme

`GET /api/v1/random-meme`

Returns a random meme image.

```bash
curl http://localhost:{YOUR-PORT}/api/v1/random-meme --output randomMeme.jpg

```

This will download a random meme image to a file named `randomMeme.jpg` in the current directory.

### Random Meme By Tag

`GET /api/v1/random-meme/tag/{tag}`

Returns a random meme image that matches the specified tag.

```bash
curl http://localhost:{YOUR-PORT}/api/v1/random-meme/tag/programming --output randomMeme.jpg

```

This will download a random meme image with the "programming" tag to a file named `randomMeme.jpg` in the current directory.

Note: Replace "programming" with the desired tag.

## Contributing

Contributions are always welcome!

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

[MIT](https://github.com/bramireza/Meme-Scraper-API/blob/main/LICENSE)

## Demo

https://meme-scraper-api.vercel.app/

### Use

```html
<img src="https://meme-scraper-api.vercel.app/api/v1/random-meme/tag/programming"/>
```
<p align="center"><img src="https://meme-scraper-api.vercel.app/api/v1/random-meme/tag/programming" width="512px"/></p>
