const express = require ('express');
const usersRouter = require('express').Router();
const usersController = require('../controller/users/users-controllers');
const usersViewController = require('../controller/users/usersViewController');
const router = express.Router();

const usersDb = require('../models/users');

usersRouter.route('/')

  .post(usersController.create, usersViewController.sendCreateUsers)


module.exports = usersRouter;
