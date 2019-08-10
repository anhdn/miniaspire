
## Getting started
```
cd my-project
yarn install
yarn run dev
```

Then open `http://localhost:8080/` to see your app.

### Deployment
After `npm run build` finished, run

```
yarn serve
```

### Technology stack:
- React v16.8
- Next.js v9
- Immutable.js
- Styled-Components
- Bootstrap v4
- Sass
- ESLint
- Prettier
- Webpack
- Husky & Lint-Staged
- Jest
### Tree
    
    .
    ├── README.md
    ├── app.yaml
    ├── constants
    │   └── interestRate.json
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   ├── _app.js
    │   ├── _document.js
    │   ├── index.js
    │   ├── register.js
    │   ├── repaid.js
    │   └── success.js
    ├── routes.js
    ├── server
    │   └── index.js
    ├── src
    │   ├── actions
    │   ├── components
    │   ├── config.js
    │   ├── containers
    │   ├── globalStyle.scss
    │   ├── libs
    │   ├── reducers
    │   ├── store
    │   ├── test
    │   └── theme.js
    ├── static
    │   ├── next-logo.png
    │   └── robots.txt
    └── yarn.lock