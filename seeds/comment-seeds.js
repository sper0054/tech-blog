const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Vivamus vestibulum sagittis sapien.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;