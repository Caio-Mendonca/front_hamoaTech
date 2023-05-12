import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  margin-top: 5px;
  color: #FFFFFF;
  .css-13cymwt-control{
    border: none;
    border-style: none;

  }
  .Select{
    border-radius: 0;
  }
  .Select__control {
    height: 40px;
    border-radius: 0;
    width: 100%;
    border: none;
    border-style: none;
    cursor: pointer;
  }
  &.Select.is-open > .Select-control .Select-arrow {
    border-color: transparent transparent red;
  }
`;