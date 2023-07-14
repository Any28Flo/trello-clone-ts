import { AppContainer } from "./assets/styles/styles";
import { AddNewItem } from "./assets/components/Item/AddNewItem";

function App() {
  const handleAdd = () => {
    console.log("si")
  }
  return (
    <AppContainer>
      <AddNewItem onAdd={() => handleAdd()} toggleButtonText={"add"} />
    </AppContainer>
  )
}

export default App
