"use stric";
import { EventEmitter } from "events";
import createGroup from "./generateSet.js";

const eventEmitter = new EventEmitter();

eventEmitter.on('createGroup', createGroup);

export default eventEmitter;
