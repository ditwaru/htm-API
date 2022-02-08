const { authenticateToken } = require('../services/jwt');

const { Router } = require('express');
const {
  httpGetAllBlogs,
  httpGetSingleBlog,
  httpPostBlog,
  httpDeleteBlog,
  httpPutBlog,
} = require('../controllers/blogs.controller');

const blogsRouter = Router();

blogsRouter.get('/', httpGetAllBlogs);
blogsRouter.get('/:slug', httpGetSingleBlog);
blogsRouter.post('/', authenticateToken, httpPostBlog);
blogsRouter.put('/', authenticateToken, httpPutBlog);
blogsRouter.delete('/:id', authenticateToken, httpDeleteBlog);

module.exports = blogsRouter;
