import { observer } from "mobx-react";
import * as React from "react";
import { AppContext } from "../../AppContext";
import { Button, Container, NumberDisplay } from "./styles";

interface Props {}

export const Home = observer(function(props: Props) {
  const { photoStore } = React.useContext(AppContext);

  return (
    <Container>
      <Button onClick={photoStore.decrement}>-</Button>
      <NumberDisplay data-testid="counter-value">
        {photoStore.counter}
      </NumberDisplay>
      <Button onClick={photoStore.increment}>+</Button>
    </Container>
  );
});
