# Simple photo search app

Forked from [react-mobx-starter](https://github.com/danielbischoff/react-mobx-starter) as a starter

I've decided to use graphql client for querying the api and mobx for the state management. And it also toke me sometime to find the ui library. The component `PhotoApp` is more in a mobx way but should be a dumb component and easier for testing. This toke me too long, so did not have much time to improve it. The places could be improved:
- Make `PhotoApp` dumb(representational) component and wrap with mobx' observer after
- Improve unit test
- Deploy to somewhere like github pages or S3

## Libraries used

- antd for the ui library
- graphql-request for the graphql client
- mobx for the state management
- testing-library/react & jest for testing library

## Prerequisite

node version 12

## Install

Checkout the project and run in your terminal:

```
npm install
```

## Run development mode

```
npm run dev
```

## Run test

```
npm run test
```

## Build for production

```
npm run build
```

The output will be under _/dist_

