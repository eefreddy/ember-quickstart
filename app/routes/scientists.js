import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Magic Johnson', 'Larry Bird', 'Hakeem Olajuwon'];
  }
});
