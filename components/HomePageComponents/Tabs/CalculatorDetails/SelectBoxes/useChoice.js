import { useState } from "react";

// custom hook to track and change the state of the intial four select boxes rendered at ems being true.
const useChoice = (initialValues) => {
  // state to track select boxes state.
  const [choice, setChoice] = useState(initialValues);

  // custom function to handle select option changes
  const onChange = (e) => {
    setChoice({
      ...choice,
      [e.target.id]: e.target.value,
    });
  };

  return {
    choice,
    onChange,
  };
};

export default useChoice;
