![Postitfy logo](https://github.com/I-Mati/postitfy/blob/develop/public/postify.png?raw=true)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/I-Mati/postitfy)

## What is this application?

Postitfy is intended to be your best friend ✨, always at your fingertips! Seriously, it's a place where you can manage your notes and accomplish everything you want. 🚀🚀🚀

It's easy! Access and start typing, no login is required (for now), don't worry about closing the browser; the data will be there waiting for you (with one limitation, it's only possible to access your data from the same device, be patient please, we will evolve 💪🏼)

### How to run this app

First, you will need to clone this repo

```
git clone https://github.com/I-Mati/postitfy/
```

Enter to the cloned project

```
cd postitfy
```

Then, you can start the app with

```
npm run start
```

Done! You have the app running on `localhost:3000`

### How to deploy this app

Once you have your fork, you can make a prod build with

```
npm run build
```

If you are looking for something more straightforward, you can use "Deploy to Netlify" above after our logo, this going to make a personal deployment of this repo (or your fork) on your netlify account

## Technical Overview

For this project, we are using a few well-known libraries for React, such us

- Create React App
- Font Awesome
- React Router

We are also using eslint, with Airbnb configuration.

### Folder Structure

The first technical decision was to divide the files in a common structure, that allows the developers to follow a common and clear pattern.
Inside `src`, there is a `component` folder that has all the component in the next pattern:

```
/components
-/ComponentName
---index.js
---style.css
```

This allows a better way to find the component file and the style at the same place.

### Where is the data?

In this case, this project. is not using Redux or Context, to manage the data this app is using a single array state with objects (the postits) in App.js (main component) and passing them through props.

To handle the changes in this array of postit, there is a function (`handleEditing`) that handles different scenarios based on a string parameter. Inside this function, s switch is used to identify each case, apply the change and make a new array and then, update the state, this function does not mutate the state directly.

### Data persistence

This app is using localStorage to persistent the data introduced by the user, this has clear limitations but is enough to manage data locally on a device.
