// @flow
import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  /* padding: 0 1rem; */
`;

const Dummy = styled.div`
  height: 400px;
  background-color: darkgrey;
`;

export default function ProjectGrid() {
  return (
    <section>
      <Grid className="center mw9">
        {[...Array(12).keys()].map(() => (
          <Dummy />
        ))}
      </Grid>
    </section>
  );
}
