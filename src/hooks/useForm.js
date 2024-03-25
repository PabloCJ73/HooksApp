import { useState } from "react";

export const useForm = (initialFornm = {}) => {
  const [formState, setFormState] = useState(initialFornm);

  /*
  {
    username: "pabloc",
    email: "pabloc@mail.com",
    password: "",
  }
  */

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialFornm);
  };

  return {
    ...formState,
    formState,
    onResetForm,
    onInputChange,
  };
};
