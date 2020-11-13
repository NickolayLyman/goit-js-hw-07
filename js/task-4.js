const counterIncrementBtn = document.querySelector('[data-action="increment"]');

const counterDecrementBtn = document.querySelector('[data-action="decrement"]');

const counterSpan = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
    return (counterSpan.textContent = counterValue += 1);
  };
  
  const decrement = () => {
      if(counterValue > 0){
    return (counterSpan.textContent = counterValue -= 1);
    }
  };

counterIncrementBtn.addEventListener('click', increment);

counterDecrementBtn.addEventListener('click', decrement);



