import * as mongoose from 'mongoose';

export const flightSchema = new mongoose.Schema({
  pilot: {
    type: String,
    required: true,
  },
  airplane: {
    type: String,
    required: true,
  },
  destinationCity: {
    type: String,
    required: true,
  },
  flightDate: {
    type: String,
    required: true,
  },
});
