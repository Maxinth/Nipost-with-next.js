import React from "react";
import PropTypes from "prop-types";
import { FormContainer, BannerForm } from "./styled";
import SelectBox from "./FormSelect";

const GenerateSelectBoxes = ({ selectBoxList, onChange, handleSubmit }) => {
  return (
    <FormContainer>
      <BannerForm>
        {selectBoxList.map((item) => {
          const { items, currentChoice, id } = item;
          return (
            <SelectBox
              key={id}
              items={items}
              currentChoice={currentChoice}
              onChange={onChange}
              id={id}
              handleSubmit={handleSubmit}
            />
          );
        })}
      </BannerForm>
    </FormContainer>
  );
};

GenerateSelectBoxes.propTypes = {
  selectBoxList: PropTypes.array,
  onChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default GenerateSelectBoxes;
