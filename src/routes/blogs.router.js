const { authenticateToken } = require('../services/jwt');

const multer = require('multer');
const upload = multer({ dest: '../../public' });
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
blogsRouter.post('/', authenticateToken, upload.single('image'), httpPostBlog);
blogsRouter.put('/', authenticateToken, httpPutBlog);
blogsRouter.delete('/:id', authenticateToken, httpDeleteBlog);

module.exports = blogsRouter;
