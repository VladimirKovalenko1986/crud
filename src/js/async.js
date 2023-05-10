function getStone(stoneName) {
  const stones = {
    Смарагд: {
      price: 1300,
      quality: 4,
    },
    Діамант: {
      price: 2700,
      quality: 3,
    },
    Сапфір: {
      price: 400,
      quality: 7,
    },
    Щебінь: {
      price: 200,
      quality: 2,
    },
  };

  //   return Promise.resolve(stones[stoneName]);

  // ! Робимо щоб функції були послідовні
  return new Promise(resolve =>
    setTimeout(() => resolve(stones[stoneName]), 500)
  );
}

//! Зробили імітацію async
function getStonesSequentially() {
  console.time('getStones');
  getStone('Смарагд').then(stone => {
    console.log(stone);

    getStone('Сапфір').then(console.log);
  });

  console.timeEnd('getStones');
}

// getStonesSequentially();

// ! async

async function getStonesSequentiallyAsync() {
  console.time('getStones');
  console.log('start');
  const emerald = await getStone('Смарагд');
  console.log(emerald);
  const saphire = await getStone('Сапфір');
  console.log(saphire);
  console.log('end');
  console.timeEnd('getStones');

  // ! Якщо ми хочемо працювати зі змінною в середині async function getStonesSequentiallyAsync()
  // return emerald;
}

// getStonesSequentiallyAsync();

// ! Якщо ми хочемо працювати зі змінною в середині async function getStonesSequentiallyAsync()
// const emerald = getStonesSequentiallyAsync();
// emerald.then(data => {
//   console.log('THEN');
//   console.log(data);
// });

//! Робимо запити паралельно

async function getStonesSequentiallyAsyncPromiseAll() {
  console.time('getStones');
  console.log('start');

  const emerald = getStone('Смарагд');
  const saphire = getStone('Сапфір');

  const stones = await Promise.all([emerald, saphire]);
  console.log(stones);

  console.log('end');
  console.timeEnd('getStones');
}

// getStonesSequentiallyAsyncPromiseAll();

// !!!!!!!!Практика!!!!
