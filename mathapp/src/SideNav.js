import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const SideNav = ({ integrals, onSelect }) => {
  return (
    <aside className="side-nav">
      <ul>
        {integrals.map((integral) => (
          <li key={integral.id} onClick={() => onSelect(integral.id)}>
            <InlineMath>{integral.label}</InlineMath>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideNav;
