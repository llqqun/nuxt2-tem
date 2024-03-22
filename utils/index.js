export function isObjectEqual(obj1, obj2) {
  // 如果不是对象，则直接比较返回
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2
  }
  // 如果两者引用同一个对象或者都是null，则相等
  if (obj1 === obj2) {
    return true
  }

  // 如果两者类型不同，则不相等
  const type1 = typeof obj1
  const type2 = typeof obj2
  if (type1 !== type2) {
    return false
  }

  // 如果一个是对象，另一个不是，则不相等
  if ((type1 === 'object' && !obj1) || (type2 === 'object' && !obj2)) {
    return false
  }

  // 对于数组或纯对象的比较
  if (Array.isArray(obj1)) {
    if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
      return false
    }
    for (let i = 0; i < obj1.length; i++) {
      if (!isObjectEqual(obj1[i], obj2[i])) {
        return false
      }
    }
  } else {
    // 非数组的对象
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    // 如果键的数量不同，则对象不相等
    if (keys1.length !== keys2.length) {
      return false
    }

    // 比较所有键及其对应的值
    for (const key of keys1) {
      // eslint-disable-next-line no-prototype-builtins
      if (!obj2.hasOwnProperty(key) || !isObjectEqual(obj1[key], obj2[key])) {
        return false
      }
    }
  }

  // 所有条件都通过了，说明两个对象完全相等
  return true
}
