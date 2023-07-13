import { AppContainer } from "./assets/components/Layout/appContainer";
import {Column} from "./assets/components/Layout/Column";
import {Card} from "./assets/components/DataDisplay/Card";

function App() {

  return (
    <AppContainer>
      <Column title='My title'>
          <Card  title='my card'/>
      </Column>
    </AppContainer>
  )
}

export default App
