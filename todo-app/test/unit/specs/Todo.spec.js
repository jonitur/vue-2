import Vue from 'vue';
import Todo from '@/components/Todo';

describe('Todo.vue', () => {
  it('Has function showForm', () => {
    expect(typeof Todo.methods.showForm).to.equal('function');
  });
  it('Has function hideForm', () => {
    expect(typeof Todo.methods.hideForm).to.equal('function');
  });
});
