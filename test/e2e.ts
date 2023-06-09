import test from 'ava';
import ratings from '../src';

// example variables for Gonzaga University
const GONZAGA_ID = 'U2Nob29sLTM3MA==';
const GONZAGA_DEPARTMENT_ID = {
  "business": "RGVwYXJ0bWVudC03"
}

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

test('get first page in business department', async t => {
  const page = await ratings.getAllProfessorsInDepartment(variables);

  console.log(page);
  t.snapshot(page);
})

test('get info of one teacher', async t => {
  const page = await ratings.getTeacher(teacher_variables);

  console.log(page);
  t.snapshot(page);
})

// unused tests below
// const pagination_variables = {
//   "count": 8,
//   "cursor": "YXJyYXljb25uZWN0aW9uOjc=",
//   "query": {
//       "text": "",
//       "schoolID": GONZAGA_ID,
//       "fallback": true,
//       "departmentID": GONZAGA_DEPARTMENT_ID.business
//   }
// }

// test('get first page in economics department', async t => {
//   const page = await ratings.getDepartmentFirstPage(variables);
//   console.log(page) 

//   t.snapshot(page);

// })

// test('get first pagination in economics department', async t => {
//   const page = await ratings.getDepartmentPagination(pagination_variables);

//   console.log(page)
//   t.snapshot(page);
// })





// old tests from forked repo
// test('search for school', async t => {
//   const schools = await ratings.searchSchool('michigan technological university');
//   console.log(schools)
//   t.snapshot(schools);
// });

// test('search for non-existent school', async t => {
//   const schools = await ratings.searchSchool('this school does not exist');

//   t.is(schools.length, 0);
// });

// test('search for teacher', async t => {
//   const teachers = await ratings.searchTeacher('shene', michiganTechID);

//   t.snapshot(teachers);
// });

// test('search for non-existent teacher', async t => {
//   const teachers = await ratings.searchTeacher('this teacher does not exist', michiganTechID);

//   t.is(teachers.length, 0);
// });

// test('get details of teacher', async t => {
//   const teacher = await ratings.getTeacher('VGVhY2hlci0yMjkxNjI=');
//   // teacher.forEach((element) => {
//   //   console.log(element)
//   // }))
//   console.log(teacher)
//   t.snapshot(teacher)
//   t.is(teacher.firstName, 'Ching-Kuang');
//   t.is(teacher.lastName, 'Shene');
// });

// test('get details with invalid ID', async t => {
//   await t.throwsAsync(ratings.getTeacher('VGVhY2hlci1udWxs'));
// });
