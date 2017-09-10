This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and refer to [ReactMaker](https://github.com/ReactMaker).


[成果](https://grey14.github.io/create-react-app/#/)

## How to use create-react-app
```bash
$ npm install -g create-react-app  # install that particular npm module system wide (globally)
$ create-react-app app-name        # create new app
$ cd app-name
$ npm run eject                    # create default setting
$ npm start                        # compile and launch
```

## How to build it for GitHub Pages at fist time
1.Specify the homepage in your package.json.<br>
For example: "homepage" : "http://myname.github.io/myapp"<br>
2.Add the following script in your package.json.<br>

    // ...
    "scripts": {
      // ...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
Then run:
```bash
$ npm install --save-dev gh-pages
$ npm run deploy
```