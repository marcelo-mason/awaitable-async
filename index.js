const async = require('async')

class AsyncWrapped {
  async concat(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.concat(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async concatLimit(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.concatLimit(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async detect(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.detect(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async detectLimit(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.detectLimit(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async detectSeries(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.detectSeries(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async each(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.each(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async eachLimit(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.eachLimit(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async eachOf(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.eachOf(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async eachOfLimit(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.eachOfLimit(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async eachSeries(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.eachSeries(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }    
  async eachOfSeries(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.eachOfSeries(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }   
  async every(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.every(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }  
  async everyLimit(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.everyLimit(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async everySeries(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.everySeries(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async filter(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.filter(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }  
  async filterLimit(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.filterLimit(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async filterSeries(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.filterSeries(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }  
  async groupBy(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.groupBy(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async groupByLimit(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.groupByLimit(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async groupBySeries(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.groupBySeries(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async map(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.map(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async mapLimit(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.mapLimit(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async mapSeries(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.mapSeries(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async mapValues(obj, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.mapValues(obj, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async mapValuesLimit(obj, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.mapValuesLimit(obj, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async mapValuesSeries(obj, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.mapValuesSeries(obj, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async reduce(coll, memo, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.reduce(coll, memo, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async reduceRight(coll, memo, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.reduceRight(coll, memo, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async reject(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.reject(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async rejectLimit(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.rejectLimit(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async rejectSeries(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.rejectSeries(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async some(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.some(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async someLimit(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.someLimit(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async someSeries(coll, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.someSeries(coll, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
  async sortBy(coll, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.sortBy(coll, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async transform(coll, accumulator, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.transform(coll, accumulator, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  applyEach(...args) {
    return async.applyEach(...args)
  }
  applyEachSeries(...args) {
    return async.applyEachSeries(...args)
  }
  async auto(tasks, concurrency) {    
    return new Promise(async (resolve, reject) => { 
      async.auto(tasks, concurrency, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async autoInject(tasks) {    
    return new Promise(async (resolve, reject) => { 
      async.autoInject(tasks, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  cargo(...args) {
    return async.cargo(...args)
  }
  compose(...args) {
    return async.compose(...args)
  }
  async doDuring(fn, test) {    
    return new Promise(async (resolve, reject) => { 
      async.doDuring(fn, test, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async doUntil(iteratee, test) {    
    return new Promise(async (resolve, reject) => { 
      async.doUntil(iteratee, test, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async doWhilst(iteratee, test) {    
    return new Promise(async (resolve, reject) => { 
      async.doWhilst(iteratee, test, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async during(test, fn) {    
    return new Promise(async (resolve, reject) => { 
      async.during(test, fn, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async forever(fn) {    
    return new Promise(async (resolve, reject) => { 
      async.forever(fn, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async parallel(tasks) {    
    return new Promise(async (resolve, reject) => { 
      async.parallel(tasks, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async parallelLimit(tasks, limit) {    
    return new Promise(async (resolve, reject) => { 
      async.parallelLimit(tasks, limit, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  priorityQueue(...args) {
    return async.priorityQueue(...args)
  }
  queue(...args) {
    return async.queue(...args)
  }
  async race(tasks) {    
    return new Promise(async (resolve, reject) => { 
      async.race(tasks, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async retry(opts, task) {    
    return new Promise(async (resolve, reject) => { 
      async.retry(opts, task, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async retryable(opts, task) {    
    return new Promise(async (resolve, reject) => { 
      async.retryable(opts, task, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  seq(...args) {
    return async.seq(...args)
  }
  async series(tasks) {    
    return new Promise(async (resolve, reject) => { 
      async.series(tasks, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async times(n, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.times(n, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async timesLimit(count, limit, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.timesLimit(count, limit, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async timesSeries(n, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.timesSeries(n, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async tryEach(tasks) {    
    return new Promise(async (resolve, reject) => { 
      async.tryEach(tasks, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async until(test, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.until(test, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async waterfall(tasks) {    
    return new Promise(async (resolve, reject) => { 
      async.waterfall(tasks, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  async whilst(test, iteratee) {    
    return new Promise(async (resolve, reject) => { 
      async.whilst(test, iteratee, (err, res) => {
        if (err) { 
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  } 
  apply(...args) {
    return async.apply(...args)
  }
  asyncify(...args) {
    return async.asyncify(...args)
  }
  constant(...args) {
    return async.constant(...args)
  }
  dir(...args) {
    return async.dir(...args)
  }
  ensureAsync(...args) {
    return async.ensureAsync(...args)
  }
  log(...args) {
    return async.log(...args)
  }
  memoize(...args) {
    return async.memoize(...args)
  }
  nextTick(...args) {
    return async.nextTick(...args)
  }
  reflect(...args) {
    return async.reflect(...args)
  }
  reflectAll(...args) {
    return async.reflectAll(...args)
  }
  setImmediate(...args) {
    return async.setImmediate(...args)
  }
  timeout(...args) {
    return async.timeout(...args)
  }
  unmemoize(...args) {
    return async.unmemoize(...args)
  }
}

module.exports = new AsyncWrapped()
