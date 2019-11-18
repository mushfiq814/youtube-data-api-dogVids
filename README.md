Note: Project Files are located in `src` directory.

# YoutubeApi

Search dog related youtube videos from the convenience of this single page application created in Angular8!

## Getting Started

Run `npm install` to install dependencies. nodeJS required.

## API KEY

The application needs a YouTube API Key to run. The application will look for the following environment information in `src/environments/environment.ts`. Create the file and update the info as follows. 

Check `src/environments/environment.example.ts` for a sample.

```javascript
export const environment = {
  production: false,
  youTubeUrl: 'https://www.googleapis.com/youtube/v3',
  apiKey: 'YOUR_API_KEY',
};
```

# TypeScript interface creation

I am using [json2ts](http://www.json2ts.com/) to generate TypeScript models from json returned api responses. Try it! It's great!

# Angular Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Screenshots

<div style="display:grid">
  <img style="grid-template-columns: 1fr 1fr 1fr;" src="https://raw.githubusercontent.com/mushfiq814/youtube-data-api-dogVids/master/src/assets/screens/main-wide.png?raw=true" alt="screenshot of app">
  <img style="grid-template-columns: 1fr 1fr 1fr;" src="https://raw.githubusercontent.com/mushfiq814/youtube-data-api-dogVids/master/src/assets/screens/video-wide.png?raw=true" alt="screenshot of app">
  <img style="grid-template-columns: 1fr 1fr 1fr;" src="https://raw.githubusercontent.com/mushfiq814/youtube-data-api-dogVids/master/src/assets/screens/search-video-narrow.png?raw=true" alt="screenshot of app">
  <img style="grid-template-columns: 1fr 1fr 1fr;" src="https://raw.githubusercontent.com/mushfiq814/youtube-data-api-dogVids/master/src/assets/screens/video-narrow.png?raw=true" alt="screenshot of app">
  <img style="grid-template-columns: 1fr 1fr 1fr;" src="https://raw.githubusercontent.com/mushfiq814/youtube-data-api-dogVids/master/src/assets/screens/loading.png?raw=true" alt="screenshot of app">
</div>

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
