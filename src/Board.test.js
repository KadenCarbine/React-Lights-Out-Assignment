import React from "react";
import { render } from "@testing-library/react";
import Board from "./Board";

it('matches snapshot', function() {
    const { asFragment } = render(<Board nrows={5} ncols={5} chanceLightStartsOn={0} />);
    expect(asFragment()).toMatchSnapshot();
})