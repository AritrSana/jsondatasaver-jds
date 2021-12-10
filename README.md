# jsondatasaver-jds
###### This is just a package to store data in json files. 

# Installing

## If using npm:
```
$ npm i jsondatasaver
```

## If using yarn:
```
$ yarn add jsondatasaver 
```

## Jds Object's Functions
* create
```
create('./', 'test', { name: "Alex", age: 20 }, (err) => {
  if(err){
    console.log(err);
  } else {
    console.log('Successfuly created the file')
  }
})

```
###### The first param take the path of the dir you want to create the file. And in your dir you will see a json file named as the second param. The second param takes the name on your file. And the third param takes the data of the file. Last param takes a callback.

###### And if the file exits. It will give an error like this.

```
[nodemon] restarting due to changes...
[nodemon] starting `node test.js`
There was an error, file may already exists!
```
* read
```
jds.read("./", "test", (err, data) => {
  if (err || !data) {
    console.log(err);
  } else {
    console.log(data);
  }
});

```
###### The first param takes dir as the create function and second param the file name that you want to read. And the third param takes a callback and it receive's two things, err and the data.

###### The output will be :
```
[nodemon] restarting due to changes...
[nodemon] starting `node test.js`
{"name":"Alex","age":20} 
```

* update 
```
jds.update("./", "test", { name: "Jon", age: 23 }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfuly updated");
  }
});
```

###### It almost same as the create function. Just it updates the file. The output will be
```
[nodemon] starting `node test.js`
[nodemon] restarting due to changes...
Successfuly updated
```

* del 
```
jds.del("./", "test", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfuly deleted");
  }
});
```

###### It almost same as the read function. But it deletes the file and in the callback it doesn't get the data. On output you will see:
```
[nodemon] restarting due to changes...
[nodemon] starting `node test.js`
Successfuly deleted
```

## Have fun using the package.


#### Learn More Over Here: https://jsondatasaver.herokuapp.com
