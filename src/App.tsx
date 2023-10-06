import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="red">
        <nav>NAV</nav>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="blue">
          <aside>ASIDE</aside>
        </GridItem>
      </Show>
      <GridItem area="main" bg="green">
        <main>Main</main>
      </GridItem>
    </Grid>
  );
}

export default App;
