import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const LatexMath = ({ inline, children }) => {
  return inline ? <InlineMath>{children}</InlineMath> : <BlockMath>{children}</BlockMath>;
};

export default LatexMath;
