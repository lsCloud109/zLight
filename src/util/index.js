export function randomExtend (minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

export function debounce (delay, callback) {
  let lastTime

  return function () {
    clearTimeout(lastTime)

    const [that, args] = [this, arguments]

    lastTime = setTimeout(() => {
      callback.apply(that, args)
    }, delay)
  }
}

export function observerDomResize (dom, callback) {
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver

  const observer = new MutationObserver(callback)

  observer.observe(dom, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })

  return observer
}

export function getPointDistance (pointOne, pointTwo) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0])

  const minusY = Math.abs(pointOne[1] - pointTwo[1])

  return Math.sqrt(minusX * minusX + minusY * minusY)
}

export function uuid (hasHyphen) {
  return (hasHyphen ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx').replace(/[xy]/g, function (c) {
		const r = Math.random() * 16 | 0
		const v = c == 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
  })
}

export function deepMerge(target, merged) {
  const start = target[0]
  const end = target[1]
  if (merged[0]){
    start[0] = merged[0]
  }
    if (merged[1]) {
      start[1] = merged[1]
    }
    const list = [start, end]
    return list
}

export function deepClone(obj, cache) {
  if (cache) {
    cache = new Map([]);
  }
  if (obj === null || typeof obj !== 'object')
    return obj;
  if (cache.has(obj))
    return cache.get(obj);
  // eslint-disable-next-line
  var clone = Array.isArray(obj) ? [] : {};
  cache.set(obj, clone);
  // @ts-ignore
  Object.keys(obj).forEach(function (key) {
    return (clone[key] = deepClone(obj[key], cache));
  });
  return clone;
}