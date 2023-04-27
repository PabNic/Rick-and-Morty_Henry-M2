// const validation = (userData, errors, setErrors) => {
//   if (!userData.email) {
//     setErrors({ ...errors, email: "Por favor completa este campo" });
//   } else if (userData.email.length > 35) {
//     setErrors({ ...errors, email: "No puedes superar los 35 caracteres" });
//   } else if (
//     ! /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(userData.email)
//   ) {
//     setErrors({ ...errors, email: "Email invalido" });
//   } else {
//     setErrors({ ...errors, email: "" });
//   }



//   if (userData.password.length < 6 || userData.password.length > 10) {
//     setErrors({ ...errors, password: "Longitud de password inválida" });
//   } else if (!/\d/.test(userData.password)) {
//     setErrors({ ...errors, password: "Debe contener al menos un número" });
//   } else {
//     setErrors({ ...errors, password: "" });
//   }
// };

// export default validation;
const validation = (userData, errors, setErrors) => {
  const newErrors = {...errors}

  if (!userData.email) {
    newErrors.email = "Se requiere email";
  } else if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(userData.email)) { 
      newErrors.email = "Formato invalido";
  } else if (userData.email.length > 35) { 
      newErrors.email = "Email nombre de usurio no puede tener mas de 35";
  } else {
      newErrors.email = "";
  }

  if (!userData.password) {
    newErrors.password = "Ingrese contraseña"
  } else if (!/\d/.test(userData.password)) {
      newErrors.password = "la contraseña tiene que tener al menos un número"
  } else if (userData.password.length < 5 || userData.password.length > 11 ) {
      newErrors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres"
  } else { 
      newErrors.password = ""
  }

  setErrors(newErrors)
};

export default validation