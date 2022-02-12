# demo-2

## How to run locally

1. `git clone` to local folder
2. `npm install` from the root
3. `npm start` from the root

## IMPORTANT

`AddCampaigns()` function in the developer tools expects _startDate_ and _endDate_ in ISO8601 format, i.e. "YYYY-MM-DD";

## Salient Features

1. Responsive
2. Loading Indicator
3. Node-express-typescript backend with validations containing GET and POST /campaign written manually
4. Keyword is debounced
5. Redux Toolkit used

## Improvements

1. Pagination
2. Validations on Client Side
3. BFF Pattern for shared types (ICampaign)
4. config service for frontend with urls for different environments (dev, test, staging, prod)
