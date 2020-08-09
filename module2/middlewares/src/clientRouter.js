"use strict";
import express from "express";
import client from "./clientes.js";

const router = express.Router();

router.get('/', client.all);

router.post('/', client.add);

export default router;
