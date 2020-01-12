function convert(...args) {
  let res = [];
  for (let i = 0; i < args.length; i++) {
    args[i] =
      typeof args[i] === `number`
        ? res.push(String(args[i]))
        : res.push(parseInt(args[i]));
  }
  return res;
}


function executeforEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}


function mapArray(arr, func) {
  let res = [];
  executeforEach(arr, i =>
    typeof i === `number` ? res.push(func(i)) : res.push(func(parseInt(i)))
  );
  return res;
}

function filterArray(arr, func) {
  let res = [];
  executeforEach(arr, i => {
    if (func(i) === true) {
      res.push(i);
    }
  });
  return res;
}

function flipOver(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    res[i] = str[str.length - 1 - i];
  }
  return res.join(``);
}


function makeListFromRange(range) {
  let res = [];
  for (let i = range[0]; i <= range[1]; i++) {
    res.push(i);
  }
  return res;
}

function getArrayOfKeys(actors, key) {
  let res = [];
  executeforEach(actors, obj => res.push(obj[key]));
  return res;
}

function substitute(arr) {
  const maxnum = 30;
  let res = [];
  mapArray(arr, el => el < maxnum ? res.push(`*`) : res.push(el));
  return res;
}

function getPastDay(date, numofdays) {
  const daylength = 86400000;
  return new Date(date - numofdays * daylength).getDate();
}


function formatDate(string_date) {
  const a = 10;
  let date = new Date(string_date)
  return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' +
    (date.getHours() < a ? '0' + date.getHours() : date.getHours()) + ':' +
    (date.getMinutes() < a ? '0' + date.getMinutes() : date.getMinutes())
}


