# GitHub Repos API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation instructions:
clone the repo to your local machine, then run `npm i` and then `npm start` in the console and the development server should open in the browser for you. Then you can use the search form to search for repos, and use the Sort and Order Selects to have more control over your searches, and select one from the rendered list to click through to the the Repo page to see the Repo's Readme.

Repo stats for forks, stars, watchers and current issues are included in both the search results and on the Repo page, along with a link to the Repo on GH and a link to the user's profile.

## The app uses:
React, React hooks, Material UI v5, Styled-components, typescript

## Implementation thoughts
React (CRA), Material UI, styled-componenets and using fetch for the API requests were by far the easiest ways to bootstrap something together in the time limit, and also the best tools to keep the App light weight. 

Firstly I investigated the GH API as I've never used it before and discovered that no Auth was needed for the endpoints I'd be querying, so that was helpful. I started by generating a new typescript app with Create React App, and then implemented React Router so navigation around the app was possible. Then began with the landing page, where I created a small branded header and began creating my search form after implementing Material and styled componenets. I decided against using anything more than Hooks for state because in an app this size it feels like overkill.

After implementing the initial search field and search button I added a `fetch` to query the API with the contents of the search field so that I could display some actual data in the UI. Then I began adding fields to the form to allow the query url to be built with sort and order params.

After this I worked on styling the results of the search and looking at what attributes to display. I was a little spoilt for choice by the sheer amount of information I had available here and realised I was overcomplicating it when choosing things to display, so stepped back and included what feels like an appropriate minimum. The styling on this page is the thing that took the most time and I probably spent too long on. However, it is nearly fully responsive, and you can use the form with just the keyboard so I'm pleased with that.

Once I was eventually happy with the styling I moved onto the repo page which was easier and took much less time, as I had a lot of reusable styling and could re-implement the RepoStats component. The only thing to do here was add a second fetch/API request, in addition to the one that fetches the Repo, to get the readme and then decode it. I know I could pass the repo down wholesale to the `RepoPage` to save making a second API request for it as the search endpoint returns the same info, but then my app wouldn't work if you refreshed the page on the `RepoPage` so sending a second API request feels appropriate.

Ultimately I ran out of time because I spent too much time tweaking the styling, but if I'd had more time I would:

## What i'd add with more time:
- Handle api request loading and errors properly
- validate the form so users can't submit a search with ''
- make the repo search results like `View` buttons tabbable
- use custom hooks or something other than fetchto make the API requests
- Update the types to be actual types
- Pagination on the search request
- format the Readme on the Repo page to be in markup
- have repos state persist when navigating back from the repo page to the search page
- linting, formatting, pre-commit hooks
- storybook for component demos
- specs
