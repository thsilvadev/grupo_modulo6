
const pedidosFromApi = {
    data: [
        {
            id: "0",
            nome_usuario: "Thiago",
            cpf_usuario: "123345678-11",
            email: "thiago@thiago.com",
            tipo_ingresso: "PrimeiroDia"
        },

        {
            id: "1",
            nome_usuario: "Pereira",
            cpf_usuario: "456789123-22",
            email: "pereira@pereira.com",
            tipo_ingresso: "Passaporte"
        },

    ]
}

const getPedidos = async () => {

    return pedidosFromApi;
    // try{
    //     const ingressos = await  Api.get("/ingressos")
    //     return ingressos;
    // } catch (error){
    //     console.log("deu merda")
    // }
    
}

export default getPedidos;