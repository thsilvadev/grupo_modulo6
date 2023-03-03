

const produtosFromApi = {
    data: [
        {
            id: "0",
            valor: "R$ 170,00",
            peca: "Moletom 1",
            foto: "https://dummyimage.com/300x200/000/fff&text=moletom1",
            fotoHover: "https://dummyimage.com/300x200/000/fff&text=moletom1-hover"
        },

        {
            id: "1",
            valor: "R$ 170,00",
            peca: "Moletom 2",
            foto: "https://dummyimage.com/300x200/000/fff&text=moletom2",
            fotoHover: "https://dummyimage.com/300x200/000/fff&text=moletom2-hover"
        },

        {
            id: "2",
            valor: "R$ 170,00",
            peca: "Moletom 3",
            foto: "https://dummyimage.com/300x200/000/fff&text=moletom3",
            fotoHover: "https://dummyimage.com/300x200/000/fff&text=moletom3-hover"
        },

        {
            id: "3",
            valor: "R$ 70,00",
            peca: "Camisa 1",
            foto: "https://dummyimage.com/300x200/000/fff&text=camisa1",
            fotoHover: "https://dummyimage.com/300x200/000/fff&text=camisa1-hover"
        },

        {
            id: "4",
            valor: "R$ 70,00",
            peca: "Camisa 2",
            foto: "https://dummyimage.com/300x200/000/fff&text=camisa2",
            fotoHover: "https://dummyimage.com/300x200/000/fff&text=camisa2-hover"
        },

        {
            id: "5",
            valor: "R$ 70,00",
            peca: "Camisa 3",
            foto: "https://dummyimage.com/300x200/000/fff&text=camisa3",
            fotoHover: "https://dummyimage.com/300x200/000/fff&text=camisa3-hover"
        },

        {
            id: "6",
            valor: "R$ 110,00",
            peca: "Bermuda 1",
            foto: "https://dummyimage.com/300x200/000/fff&text=bermuda1",
            fotoHover: "https://dummyimage.com/300x200/000/fff&text=bermuda1-hover"
        },

        {
            id: "7",
            valor: "R$ 110,00",
            peca: "Bermuda 2",
            foto: "https://dummyimage.com/300x200/000/fff&text=bermuda2",
            fotoHover: "https://dummyimage.com/300x200/000/fff&text=bermuda2-hover"
        },

        {
            id: "8",
            valor: "R$ 110,00",
            peca: "Bermuda 3",
            foto: "https://dummyimage.com/300x200/000/fff&text=bermuda3",
            fotoHover: "https://dummyimage.com/300x200/000/fff&text=bermuda3-hover"
        }

    ]
}

const getProdutos = async () => {

    return produtosFromApi;
    // try{
    //     const ingressos = await  Api.get("/ingressos")
    //     return ingressos;
    // } catch (error){
    //     console.log("deu merda")
    // }
    
}

export default getProdutos;