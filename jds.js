/** @format */

const fs = require("fs");
const path = require("path");

const basedir = path.join(__dirname, './');

const create = (dir, file, data, callback) => {
  fs.open(`${basedir + dir}/${file}.json`, "wx", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      const stringData = JSON.stringify(data);
      fs.writeFile(fileDescriptor, stringData, (err2) => {
        if (!err2) {
          fs.close(fileDescriptor, (err3) => {
            if (!err3) {
              callback(false);
            } else {
              callback("Error closing the new file!");
            }
          });
        } else {
          callback("Error writing to new file!");
        }
      });
    } else {
      callback("There was an error, file may already exists!");
    }
  });
};

const read = (dir, file, callback = (error, data) => {}) => {
  fs.readFile(`${basedir + dir}/${file}.json`, "utf8", (err, data) => {
    callback(err, data);
  });
};

const update = (dir, file, data, callback) => {
  fs.open(`${basedir + dir}/${file}.json`, "r+", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      const stringData = JSON.stringify(data);

      fs.ftruncate(fileDescriptor, (err1) => {
        if (!err1) {
          fs.writeFile(fileDescriptor, stringData, (err2) => {
            if (!err2) {
              fs.close(fileDescriptor, (err3) => {
                if (!err3) {
                  callback(false);
                } else {
                  callback("Error closing file!");
                }
              });
            } else {
              callback("Error writing to file!");
            }
          });
        } else {
          callback("Error truncating file!");
        }
      });
    } else {
      console.log(`Error updating. File may not exist`);
    }
  });
};

const del = (dir, file, callback) => {
  fs.unlink(`${basedir + dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback(`Error deleting file`);
    }
  });
};

module.exports = { create, read, update, del };
