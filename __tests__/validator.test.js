'use strict';

const { TestWatcher } = require('@jest/core');
const validator = require('../src/middleware/validator.js');

describe ('testing the validator function', () => {
  test('validator checks whether there is a name in the query or not', () => {
    let requestObject = {
      query: {
        name: 'test',
      }
    };
    let responseObject = {};
    let nextFunction = jest.fn();

    validator(requestObject, responseObject, nextFunction);
    expect(nextFunction).toHaveBeenCalled();
  });
});