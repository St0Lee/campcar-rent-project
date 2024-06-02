import axios from "axios";

const advertsInstance = axios.create({
    baseURL: "https://665ad3dc003609eda45eefca.mockapi.io/api/adverts"
});

export const getAdverts = async () => {
    const {data} = await advertsInstance.get("/");
    return data;
};
