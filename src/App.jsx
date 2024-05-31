import { Button } from "@material-tailwind/react";

function App() {

  return (
    <>
      <Button>Button</Button>
      <Button variant="filled">filled</Button>
      <Button variant="gradient">gradient</Button>
      <Button variant="outlined" className="text-5xl border-blue-gray-500">outlined</Button>
      <Button variant="text">text</Button>
    </>
  )
}

export default App
