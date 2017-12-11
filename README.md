
# Awaitable Async

Every method in **caolan/async** wrapped in promises.

```js
const async = require('awaitable-async')
```

## Examples


### Get results

```js
const results = await async.map(['file1','file2','file3'], fs.stat)  
console.log(results)
```

### Wait until finished

```js
await async.eachSeries([1,2,3,4,5], num =>{
  console.log(`${num} done`)
})  
console.log('All done!')
```

### Catch errors

```js
try {
  await async.each(list)  
} catch(err){
  console.log('oops!')  
}
```
