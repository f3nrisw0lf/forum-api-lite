const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const { PORT = 8080, MONGO_URI } = process.env;
