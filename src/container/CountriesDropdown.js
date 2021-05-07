import React, { useRef } from "react";
import useDropdown from "use-dropdown";

function CountriesDropdown(props) {
  const coutriesEl = useRef(null);
  const countriesDropEl = useRef(null);
  const [countriesDropOpen, toggleCountriesDrop] = useDropdown(countriesDropEl, coutriesEl);
  const onClick = () => toggleCountriesDrop();

  return (
    <>
      <div ref={coutriesEl} onClick={onClick}>
        <span>Countries</span>
        <span>{countriesDropOpen ? '▲' : '▼'}</span>
      </div>
      <div ref={countriesDropEl} hidden={countriesDropOpen}>
        <div>Greece</div>
        <div>Poland</div>
        <div>Spain</div>
      </div>
    </>
  );
}