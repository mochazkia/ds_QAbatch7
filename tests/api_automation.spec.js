const { test, expect } = require('@playwright/test');
const { Ajv } = require('ajv');

const ajv = new Ajv();


 
test.describe('API Tests', () => {
  test('Sample GET Request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.page).toBe(2);

    const valid = ajv.validate(require('./jsonschema/get_user_scema.json'),respons)

    if (!valid) {
        console.error("AJV Validation error:", ajv.errorsText());
    }

    expect(valid).toBe(true)
  });

  test('Sample POST Request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 'John',
        job: 'developer',
      },
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.name).toBe('John');

    const valid = ajv.validate(require('./jsonschema/post_user_scema.json'),respons)

    if (!valid) {
        console.error("AJV Validation error:", ajv.errorsText());
    }

    expect(valid).toBe(true)

  });

  test('Sample DELETE Request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
   
    const valid = ajv.validate(require('./jsonschema/delete_user_scema.json'),respons)

    if (!valid) {
        console.error("AJV Validation error:", ajv.errorsText());
    }

    expect(valid).toBe(true)


  });

  test('Sample PUT Request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
      data: {
        name: 'Jane',
        job: 'manager',
      },
    });
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.name).toBe('Jane');

    const valid = ajv.validate(require('./jsonschema/delete_user_scema.json'),respons)

    if (!valid) {
        console.error("AJV Validation error:", ajv.errorsText());
    }

    expect(valid).toBe(true)
  });
});
