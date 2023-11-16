async function foo() {
  const res = await fetch();
  const res1 = await (res * 2);
  return res ** 2;
}
