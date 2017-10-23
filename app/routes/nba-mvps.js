import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Russell Westbrook', 'Steph Curry', 'Kevin Durant', 'Lebron James', 'Derrick Rose'];
  }
});
