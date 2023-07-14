import { AppContainer } from "./assets/styles/styles";
import { AddNewItem } from "./assets/components/Item/AddNewItem";
import { Column } from './assets/components/Layout/Column';
import { Card } from './assets/components/DataDisplay/Card';

function App() {
  const handleAdd = () => {
    console.log("si")
  }
  return (
    <AppContainer>
      <Column title="To Do" >
        <Card title="Generate app scaffold" />
      </Column>

      <Column title="In Progress" >
        <Card title="Learn Typecript" />
      </Column>

      <Column title="Done">
        <Card title="Begin to use static typing" />
      </Column>


      <AddNewItem onAdd={() => handleAdd()} toggleButtonText={"add"} />
    </AppContainer>
  )
}

export default App
