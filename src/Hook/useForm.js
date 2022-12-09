import { useState } from "react";

const useForm = (estadoInicial) => {
    const [form, setForm] = useState(estadoInicial);
    
    const onChangeForm = (event) => {
        const {name, value} = event.target
        const novoForm = {
          ...form, 
          [name]: value
        };
        setForm(novoForm);
    }
 
    return([form, onChangeForm])

}
export default useForm