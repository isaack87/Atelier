

{props.questionanswerslist.filter((val) => {
  console.log(val, '👈')
  if (props.searchTerm === ('')) {
    return val;
  }
  if (val.question.toLowerCase().includes(props.searchTerm.toLowerCase())) {
    return val;
  }
})
  .map((val, key) => <div key={key}>{val.question}</div>)}
