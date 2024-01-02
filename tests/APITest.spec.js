const { test, expect } = require('@playwright/test');

test('GET request to GitHub API', async ({ request }) => {
  const response = await request.get('https://api.github.com/users/microsoft');
  expect(response.ok()).toBeTruthy(); // Assert successful response
  const json = await response.json();
  expect(json.name).toBe('Microsoft'); // Assert specific response data
});