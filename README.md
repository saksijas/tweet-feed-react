# Tweet Feed React application!

Visual presentation of working version tweet-feed node app.

There are two pages for presentation: list of users where clicking on someones name, will take you to users page, where you can see all the tweets that he sees.

This application uses React framework with Material UI library. It relies on small backend service for data fetching and adding new consents.

## Project Setup

### Install dependencies

```
npm install
```

### Start project

```
npm start
```

## Project structure

In the project structure we have the following parts:

```

|- src

	|- assets/

	|- components/

	|- containers/

	|- services/

```

asset folder couple of pictures, used in React app.

component folder contains all needed components for this application

     - ErrorBoundary - showing errors
     - Profile - Detailed profile for a user
     - ProfileList - container component for fetching and showing all users
     - ProfileThumbnail - Presentational component called in ProfileList
     - Tweet - Presentational component, that shows one tweet(username and content of tweet)
     - Shared - Header and Footer

container folder contains root file for rendering current screen and routing

services folder contains axios calls to backend

### User routes

http://localhost:3000/
Homepage that will show all users

http://localhost:3000/user/:username
Page for user based on url parameter
