import { hbs } from 'ember-cli-htmlbars';
// import { PeopleList } from '../app/components/people-list';

export default {
  title: 'PeopleList',
  // component: PeopleList
};

const Template = (args) => ({
  template: hbs`<PeopleList @title={{title}} @people={{people}} />`,
  context: args
});

export const PeopleListStory = Template.bind({});

PeopleListStory.args = {
  title: 'People List',
  people: ['Foo Bar', 'Baz Bing', 'Bang Boom']
};
