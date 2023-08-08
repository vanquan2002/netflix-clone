import React from "react";
import styled from "styled-components";

export default function NotAvailable({notAvailable}) {
  let text;

  if (notAvailable === 'TVShow') {
    text = <h1 className="not-available">
            No Movies avaialble for the selected genre. Please select a different genre.
          </h1>
  }
  if (notAvailable === 'UserLiked') {
    text = <h1 className="not-available">
            You haven't added a favorite movie yet!
          </h1>
  }
  return (
    <Container>
      {text}
    </Container>
  );
}

const Container = styled.div``;