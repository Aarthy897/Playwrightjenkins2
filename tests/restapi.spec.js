import { test, expect } from '@playwright/test';

test('Create GitHub repo - simple API test', async ({ request }) => {

  const response = await request.post('https://api.github.com/user/repos', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json'
    },
    data: {
      name: `Hello-World-${Date.now()}`, // avoid duplicate repo error
      private: false
    }
  });

  // Status validation
  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  // Basic assertions
  expect(responseBody.name).toContain('Hello-World');
  expect(responseBody.private).toBe(false);
  expect(responseBody.id).toBeTruthy();

  console.log('Repository created:', responseBody.html_url);
});