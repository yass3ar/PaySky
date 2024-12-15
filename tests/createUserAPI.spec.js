// tests/api/createUser.spec.js
const { test, expect } = require('@playwright/test');
const userData = require('../Data/userData.json');

test('Create a new user and validate the response', async ({ request }) => {
  // Send POST request to create a new user
  const response = await request.post('https://reqres.in/api/users', {
    data: userData.user
  });

  // Assert the status code is 201
  expect(response.status()).toBe(201);

  // Parse the response body
  const responseBody = await response.json();

  // Validate the response body contains required fields
  expect(responseBody).toHaveProperty('id'); // Assert that 'id' exists
  expect(responseBody).toHaveProperty('name', userData.user.name); // Validate 'name' matches
  expect(responseBody).toHaveProperty('job', userData.user.job);   // Validate 'job' matches

  // Log the response for debugging purposes
  console.log('Response:', responseBody);
});
