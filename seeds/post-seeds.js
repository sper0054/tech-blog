const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'gNJRngjr mrjgNRJKG RGrjgnrg RJGWRJFNRJR RGJRGJr gjrGJKew',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'gNJRngjr mrjgNRJKG RGrjgnrg RJGWRJFNRJR RGJRGJr gjrGJKew',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'gNJRngjr mrjgNRJKG RGrjgnrg RJGWRJFNRJR RGJRGJr gjrGJKew',
    user_id: 3
  },
  {
    title: 'Nunc purus.',
    post_content: 'gNJRngjr mrjgNRJKG RGrjgnrg RJGWRJFNRJR RGJRGJr gjrGJKew',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'gNJRngjr mrjgNRJKG RGrjgnrg RJGWRJFNRJR RGJRGJr gjrGJKew',
    user_id: 5
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'gNJRngjr mrjgNRJKG RGrjgnrg RJGWRJFNRJR RGJRGJr gjrGJKew',
    user_id: 1
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'gNJRngjr mrjgNRJKG RGrjgnrg RJGWRJFNRJR RGJRGJr gjrGJKew',
    user_id: 6
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'gNJRngjr mrjgNRJKG RGrjgnrg RJGWRJFNRJR RGJRGJr gjrGJKew',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'gNJRngjr mrjgNRJKG RGrjgnrg RJGWRJFNRJR RGJRGJr gjrGJKew',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;