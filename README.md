# Flow Test

## Heroku Button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This will work (app.json)

## Review Apps

This will work (app.json)

The apps will look correct in review, but a subsequent promotion will break them.

## CI

This will work (app.json)

All tests will pass, but then a subsequent promotion will break.

## Pipeline promotion

This will break on promotion.

To fix it, you'll have to run:

```
$ heroku buildpacks:set heroku/nodejs -a pipeline-app-name
$ heroku buildpacks:add heroku/go -a pipeline-app-name
```

(even though this data is [already specififed in the app](app.json))

## Local git-based deploy

This will break:

```
$ git clone https://github.com/hunterloftis/flow-test.git
$ cd flow-test
$ heroku create
$ git push heroku master
$ heroku open
```

To fix it, you'll have to run:

```
$ heroku buildpacks:set heroku/nodejs -a pipeline-app-name
$ heroku buildpacks:add heroku/go -a pipeline-app-name
$ git commit -am 'fix buildpacks' --allow-empty
$ git push heroku master
```

(even though this data is [already specififed in the app](app.json))
