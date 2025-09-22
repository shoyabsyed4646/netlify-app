export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }

   element.addEventListener('click', (event) => {
    event.stopPropagation()
    setCounter(counter + 1);
  });

  //test
  window.addEventListener('click', (event) => {
    if (event.target !== element && counter > 0) {
      setCounter(counter - 1)
    }
  });


  setCounter(0)
}
