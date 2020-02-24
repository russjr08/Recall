# Recall

Recall is a web application that can be utilized to schedule and keep track of follow-up calls for call center agents (or in other words, to _recall_ a follow-up!). 

---
## Building
In order to build this locally, you will need to run the following in the cloned directory:

` npm run build`

However, this assumes you are planning on publishing this to the root of your server's directory (`/`). If you plan on publishing to a subdirectory, such as `/recall` you will need to create a `.env.production` file, and include the following in it:

```
REACT_APP_EXTERNAL_SUBDIRECTORY=/your/subdirectory
PUBLIC_URL=https://doamin.name/your/subdirectory

```

This will ensure that after running `npm run build` the correct references will be in place to static files, and any routes within the app will be updated to take advantage of this.

On the off chance you are running into the same scenario while building locally, include the same variables in a `.env.development` file.

#### This project was initialized with Create React App, it's default documentation can be found below.

----
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
