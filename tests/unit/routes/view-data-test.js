import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | viewData', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:view-data');
    assert.ok(route);
  });
});
