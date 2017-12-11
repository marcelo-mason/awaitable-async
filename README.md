
# async-wrapped

```js

const async = require('awaitable-async')

try {

  const results = await async.map(['file1','file2','file3'], fs.stat)  
  // results is now an array of stats for each file

} catch(err) {
  console.log(err.message)
}

```
