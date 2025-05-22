import { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const useFormData = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personal: {},
    demograph: {},
    address: {},
    farming: {},
  });

  const updateFormSection = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data,
      },
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormSection }}>
      {children}
    </FormContext.Provider>
  );
};
