interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 p-2">{props.text ?? 'Enviar'}</button>
}

function App() {
  return (
    <div>
      <Button />
      <Button text="Reset" />
    </div>
  )
}

export default App
