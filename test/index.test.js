const test = require('tape');
const isBananaman = require('../');

test('Daniel is not Banana Man', (assert) => {
  const expected = false;
  const actual = isBananaman('Daniel');
  assert.equal(expected, actual);

  assert.end();
});

test('Eric is Banana Man', (assert) => {
  const expected = true;
  const actual = isBananaman('Eric');
  assert.equal(expected, actual);

  assert.end();
});
