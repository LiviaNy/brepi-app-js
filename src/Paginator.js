const Paginator = (props) => {
  const handlePage = props.handlePage;

  return (
    <div className="paginator">
      <button onClick={() => handlePage(-2)}>&#8920;</button>
      <button onClick={() => handlePage(1)}>1</button>
      <button onClick={() => handlePage(2)}>2</button>
      <button onClick={() => handlePage(3)}>3</button>
      <button onClick={() => handlePage(4)}>4</button>
      <button onClick={() => handlePage(5)}>5</button>
      <button onClick={() => handlePage(-1)}>&#8921;</button>
    </div>
  );
};

export default Paginator;
