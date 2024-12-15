
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
  expect(responseBody).toHaveProperty('id'); 
  expect(responseBody).toHaveProperty('name', userData.user.name); 
  expect(responseBody).toHaveProperty('job', userData.user.job);

  // Log the response for debugging purposes
  console.log('Response:', responseBody);
});
