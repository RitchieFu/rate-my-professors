import test from 'ava';
import ratings from '../src';

import { GONZAGA_DEPARTMENT_ID, GONZAGA_ID } from '../src/constants';

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
const variables = {
  "query": {
      "text": "",
      "schoolID": GONZAGA_ID,
      "fallback": true,
      "departmentID": GONZAGA_DEPARTMENT_ID.business
  },
  "schoolID": GONZAGA_ID
}

const pagination_variables = {
  "count": 8,
  "cursor": "YXJyYXljb25uZWN0aW9uOjc=",
  "query": {
      "text": "",
      "schoolID": GONZAGA_ID,
      "fallback": true,
      "departmentID": GONZAGA_DEPARTMENT_ID.business
  }
}

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


test('get cursor of first page in economics department', async t => {
  const page = await ratings.getAllProfessorsInDepartment(variables);

  console.log(page);
  t.snapshot(page);
})

// test('get details with invalid ID', async t => {
//   await t.throwsAsync(ratings.getTeacher('VGVhY2hlci1udWxs'));
// });
