const y = 'lele';

const f = () => {
  const x = 'lala';
  console.log(x, y);
};

const g = () => {
  const a = 'lala';
  console.log(a, y);
  // console.log(a, x);
};

const w = () => {
  const x = 'lala';
  return () => {
    const z = 'lolo';
    console.log(x, y, z);
  };
};

// f();
// g();
w();
// console.log(y);
// console.log(x); => Error
