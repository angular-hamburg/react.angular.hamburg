
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

## Todos / Ideas

- Check and prune devDependencies
- Consider using a task runner for the (static) build
- Add an offline indicator
- Implement offline support via Service Worker, decide on caching strategies
- Buy the `angular.hamburg` domain
- Start I18N, specifically for supporting German
- Consider implementing a light theme
- Make A11y check
- Implement API for retrieving the next Meetup and Talks dynamically
- Improve `Next Meetup` section with host, location, time of day, spots available, and possibly a countdown clock
- Consider rewriting CSS in LESS or SASS
- Rewrite in Angular, lol
- Adopt a wombat, drink a coffee and enjoy life

## Issues

- **Various blending issues [`WONTFIX`]:** Edge, Opera, Safari, older version of Firefox and Chrome, and multiple mobile browsers don't yet support [background-blend-mode](https://developer.mozilla.org/de/docs/Web/CSS/background-blend-mode) so the banner image either won't be blended or, sometimes, will even be blended through all z-indexes
- **Banner image not centered [`FIXED`]**: In Opera, Safari, Firefox, older versions of Chrome, and multiple mobile browsers, the banner image was not centered, but translated 50% to the right: the problem was that said older browsers have not yet implemented the new CSS spec which says that [absolute-positioned children of a flexbox are supposed to be positioned based on the align and justify properties of the box](https://developers.google.com/web/updates/2016/06/absolute-positioned-children)

## License

MIT

Made with :anchor: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE). 
