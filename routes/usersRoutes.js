const express = require ('express');
const usersRouter = require('express').Router();
const usersController = require('../controller/users/users-controllers');
const usersViewController = require('../controller/users/usersViewController');



usersRouter.route('/')

  .post(usersController.create, usersViewController.sendCreateUsers);


module.exports = usersRouter;
