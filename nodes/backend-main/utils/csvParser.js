import fs from 'fs';
import csv from 'csv-parser';
import {logger} from './logger.js';

export const parseCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        resolve(results); // ✅ Properly resolve the data here
      })
      .on('error', (err) => {
        logger.error('Error reading CSV:', err);
        reject(err); // ✅ Reject on error
      });
  });
};
