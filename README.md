# Evaluate News With NLP Api

My solution to the third project in Advanced Front-End Web Development Nanodegree Program - FWD.

The project aims to do sentiment analysis from a url of a blog or news site through [MeaningCloud Api](https://www.meaningcloud.com/developer/sentiment-analysis)  and display the response to the user.

The goal of this project is to give practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Service workers
- Using APIs and creating requests to external urls

## Getting Started
### Prerequisites

* Make sure you have node and npm installed on your machine.
* Create an account on [MeaningCloud](https://www.meaningcloud.com/developer/sentiment-analysis) and get your api key.

### Installation

* Install all project dependencies with `npm install`

### Configuration
Create a `.env` and paste your MeaningCloud API key `API_KEY=**************************`

## Usage

This project uses webpack and there are two enviroment options configured.

### Production enviroment

To run the project in production mode:
* Run `npm run build-prod`.
* Then `npm start` to start the express server and serve the production files.
* go to `localhost:8081`

### Development enviroment

To run the project in Development mode:
* Run `npm run build-dev`.
* Then `npm start`.
* go to `localhost:8080`

Development enviroment offers hot reload for the browser when source code changes.

### Running tests

You can run test with `npm run test`

## Credits
[Starter Code](https://github.com/udacity/fend/tree/refresh-2019/projects/evaluate-news-nlp) for the project from Udacity.
