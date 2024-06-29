let a = 1;
function x() {
  console.log(a);
  let b = 2;
  function y() {
    console.log(b);
  }
  y();
}

x();
