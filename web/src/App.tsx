interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Sendo 1" />
      <Button title="Sendo 2" />
      <Button title="Sendo 3" />
      <Button title="NLW" />
    </div>
  )
}

export default App
