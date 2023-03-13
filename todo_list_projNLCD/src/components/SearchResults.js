import { Grid } from "@mui/material";
import Carte from "./Carte";

export default function SearchResults(props) {
    return (
        <div>
          <div>
          {
            props.search ? `Résultats pour "${props.search}"` : 'Tous les résultats'
          }
          </div>
          <Grid container spacing={2}>
            {
              props.results.map(carte => {
                return (
                  <Grid item xs={4} key={carte.id}>
                    <Carte carte={carte} />
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      )
}