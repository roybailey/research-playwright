import { test, expect } from '@playwright/test';

test('access auth-api actuator', async ({ request }) => {
  const authActuator = await request.get(`http://localhost:8282/actuator`);
  expect(authActuator.ok()).toBeTruthy();
  const response = await authActuator.json()
  expect(response._links.self).toEqual({
    href: `http://localhost:8282/actuator`,
    templated: false
  });
});
