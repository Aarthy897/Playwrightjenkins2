import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('Create GitHub repo - improved', async ({ request }) => {

  const repoName = `repo-test-${Date.now()}`;

  const response = await request.post('https://api.github.com/user/repos', {
    headers: {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2026-03-10'
    },
    data: {
      name: repoName,
      private: false
    }
  });

  console.log('Status:', response.status());

  const body = await response.json();
  console.log(JSON.stringify(body, null, 2));

  expect(response.status()).toBe(201);
  expect(body.name).toBe(repoName);
});