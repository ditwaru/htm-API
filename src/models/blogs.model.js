const { nanoid } = require('nanoid');
const blogs = require('./schemas/blogs.schema');
require('dotenv').config();

const saveBlog = async (blog) => {
  if (!blog.id) {
    Object.assign(blog, {
      id: nanoid(),
    });
  }

  if (!blog.slug) {
    Object.assign(blog, {
      slug: blog.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/ /g, '-'),
    });
  }

  if (!blog.published) {
    Object.assign(blog, {
      published: new Date(),
    });
  }

  try {
    return await blogs.findOneAndUpdate({ id: blog.id }, blog, {
      returnOriginal: false,
      upsert: true,
    });
  } catch (e) {
    return e;
  }
};

const findOneBlog = async (slug) => {
  try {
    return await blogs.find({ slug }, { _id: 0, __v: 0 });
  } catch (e) {
    return e;
  }
};

const findAllBlogs = async (skip, limit) => {
  try {
    return await blogs
      .find({}, { _id: 0, __v: 0 })
      .sort({ title: 0 })
      .skip(skip)
      .limit(limit);
  } catch (e) {
    return e;
  }
};

const deleteBlog = async (id) => {
  try {
    return await blogs.findOneAndDelete({ id });
  } catch (e) {
    return e;
  }
};

module.exports = { saveBlog, findOneBlog, findAllBlogs, deleteBlog };
