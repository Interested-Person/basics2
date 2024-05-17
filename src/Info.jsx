function Info(props) {
    var arr = props.words;
  
    return (
      <div>
        <h2>Find the words:</h2>
        {arr.map((word, index) => (
          <pre key={index}>{word.toUpperCase()}</pre>
        ))}
        <br />
      </div>
    );
  }
  
  
export default Info