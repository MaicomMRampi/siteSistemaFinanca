import * as Yup from "yup"

const initialValues = {
    nome: '',
    email: '',
    mensagem: '',
};

const validationSchema = Yup.object().shape({
    nome: Yup.string().required('O nome é obrigatório').min(3, 'O nome deve ter pelo menos 3 caracteres').trim('Nome inválido'),
    email: Yup.string().email('Email inválido').required('O email é obrigatório'),
    mensagem: Yup.string().required('A mensagem é obrigatória').trim('Mensagem inválida'),
});

export {
    initialValues,
    validationSchema,
}