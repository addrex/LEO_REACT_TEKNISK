function Count({ count, setCount }) {



    function Click() {
        setCount(count + 1)
    }
    
  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={Click}>Increase</button>
    </>
  );
}

export default Count;
