import { greeting } from '../src/app';

describe('greeting', () => {
  test('exists', () => {
    expect(greeting).toEqual('Hi There');
  });
});
