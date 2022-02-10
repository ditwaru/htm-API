const {
  saveBlog,
  findOneBlog,
  findAllBlogs,
  deleteBlog,
} = require('../models/blogs.model');
const { getPagination } = require('../services/query');

const httpGetAllBlogs = async (req, res) => {
  const { skip, limit } = getPagination(req.query);
  try {
    const blogs = await findAllBlogs(skip, limit);
    Object.keys(blogs).length
      ? res.status(200).json(blogs)
      : res.status(404).json([]);
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};
const httpGetSingleBlog = async (req, res) => {
  const { slug } = req.params;
  try {
    const blog = await findOneBlog(slug);
    blog.length
      ? res.status(200).json(blog)
      : res.status(404).json({ message: 'Blog does not exist' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

const httpPostBlog = async (req, res) => {
  const { body } = req;
  try {
    const blog = await saveBlog(body);
    Object.keys(blog).length
      ? res.status(201).json(blog)
      : res.status(400).json({ message: 'Invalid request' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

const httpDeleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await deleteBlog(id);
    Object.keys(blog).length
      ? res.status(200).json(blog)
      : res.status(400).json({ message: 'Invalid request' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

const httpPutBlog = async (req, res) => {
  // this is the same as Post, except returns a status code of 200 instead of 201
  const { body } = req;
  try {
    const blog = await saveBlog(body);
    Object.keys(blog).length
      ? res.status(200).json(blog)
      : res.status(400).json({ message: 'Invalid request' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

module.exports = {
  httpGetAllBlogs,
  httpGetSingleBlog,
  httpPostBlog,
  httpDeleteBlog,
  httpPutBlog,
};
