# 🧑‍🏫 @ritchiefu/rate-my-professors

A basic wrapper for Rate My Professors's GraphQL API forked from @mtucourses/rate-my-professors. Includes TypeScript definitions.

This version allows users to get data on teachers within a certain department (ex: Engineering, Biology, Humanities, etc.)
The GraphQL queries are the same as the ones on RateMyProfessors and the amount of data returned can be large.

## 🏗 Usage

```js
// Change to 
// const ratings = require('@ritchiefu/rate-my-professors').default;
// if using JS instead of TS
import ratings from '@ritchiefu/rate-my-professors';

const variables = {
  "query": {
      "text": "",
      "schoolID": GONZAGA_ID,
      "fallback": true,
      "departmentID": GONZAGA_DEPARTMENT_ID.business
  },
  "schoolID": GONZAGA_ID
}

// id of professor Scott Coble at Gonzaga University
const teacher_variables = {
  "id": "VGVhY2hlci0zNjc5Mw=="
}

(async () => {

  const page = await ratings.getAllProfessorsInDepartment(variables);

  console.log(page);
  // {
  //     school: {
  //       __typename: 'School',
  //       id: 'U2Nob29sLTM3MA==',
  //       name: 'Gonzaga University',
  //     },
  //     search: {
  //       teachers: {
  //         didFallback: false,
  //         edges: [
  //           {
  //             cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
  //             node: {
  //               __typename: 'Teacher',
  //               avgDifficulty: 3.1,
  //               avgRating: 2.9,
  //               department: 'Business',
  //               firstName: 'Will',
  //               id: 'VGVhY2hlci05OTU4NQ==',
  //               isSaved: false,
  //               lastName: 'Terpening',
  //               legacyId: 99585,
  //               numRatings: 17,
  //               school: {
  //                 id: 'U2Nob29sLTM3MA==',
  //                 name: 'Gonzaga University',
  //               },
  //               wouldTakeAgainPercent: -1,
  //             },
  //           },
  // Shows 8 professors for first query.

  const teacher = await ratings.getTeacher(teacher_variables);

  console.log(teacher);
  // see e2e.ts.md snapshot for output. 

})();
```

## 🧰  Development

```bash
# First:
# install dependencies
yarn install

# then:
# build in watch mode
yarn build:watch

# and you can:

# run tests
yarn test

# run tests in watch mode
yarn test:watch
```

To publish a new package version, run `npm version [patch|minor|major]` and then `git push && git push --tags` on the master branch.
