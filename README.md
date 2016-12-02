
# angular.hamburg

**The [angular.hamburg](https://marktiedemann.github.io/angular.hamburg/) website for Hamburg's [Angular](https://angular.io/) [Meetup](https://www.meetup.com/Hamburg-AngularJS-Meetup/), jokingly made with [React](https://github.com/facebook/react).**

[![](https://raw.githubusercontent.com/MarkTiedemann/angular.hamburg/master/preview.png)](https://marktiedemann.github.io/angular.hamburg/)

**Heavily inspired by and partially forked from the beautiful website of [HannoverJS](https://github.com/HannoverJS/hannoverjs.de).**

## Development

- **Install dependencies**
    ```
    npm install
    ```

- **Start development server on `localhost:3000`**
    ```
    npm start
    ```

- **Lint `.js` files (and fix errors / warnings automatically)**
    ```
    npm run lint / npm run lint:fix
    ```

- **Run tests**
    ```
    npm test
    ```

- **Generate production build in the `/docs` folder**
    ```
    npm run build
    ```

- **Miscellaneous commands**
    ```
    npm run clean         # deletes the /docs folder
    npm run build:static  # builds the static parts of the site
    npm run chrome        # opens localhost:3000 in Chrome
    ```

## Todos

- Add `Made with ...` footer
- Implement offline support via Service Worker, decide on caching strategies
- Buy the `angular.hamburg` domain
- Start I18N, specifically for supporting German 
- Implement API for retrieving the next Meetup and Talks dynamically
- Rewrite in Angular, lol
- Adopt a wombat, drink a coffee and enjoy life

## Issues

- **Various blending issues:** Edge, Opera, Safari, older version of Firefox and Chrome, and multiple mobile browsers don't yet support [background-blend-mode](https://developer.mozilla.org/de/docs/Web/CSS/background-blend-mode) so the banner image either won't be blended or, sometimes, will even be blended through all z-indexes [`WONTFIX`]
- **Banner image not centered**: In Opera, Safari, Firefox, older versions of Chrome, and multiple mobile browsers, the banner image is not centered, but translated 50% to the right [`BUG`]

## License

MIT

Made with :anchor: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE). 
