const fs = require("fs");
const path = require("path");

const jds = {};

jds.basedir = path.join(__dirname, "./");

jds.create = (dir, file, data, callback) => {
  fs.open(`${jds.basedir + dir}/${file}.json`, "wx", (err, fileDescriptor) => {
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

jds.read = (dir, file, callback) => {
  fs.readFile(`${jds.basedir + dir}/${file}.json`, "utf8", (err, data) => {
    callback(err, data);
  });
};

jds.update = (dir, file, data, callback) => {
  fs.open(`${jds.basedir + dir}/${file}.json`, "r+", (err, fileDescriptor) => {
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

jds.delete = (dir, file, callback) => {
  fs.unlink(`${jds.basedir + dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback(`Error deleting file`);
    }
  });
};

module.exports = jds;
