import { createSignal } from 'solid-js';

const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class="bg-blue-900 text-white p-5">
      <div>SOLID COUNTER</div>
      <button onClick={() => setCount(count() - 1)}>Remove one</button>
      <div className="counter"> Count = {count()} </div>
      <button onClick={() => setCount(count() + 1)}>Add one</button>
    </div>
  );
};

export default Counter;
