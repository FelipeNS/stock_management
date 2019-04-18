import { create } from 'apisauce';

const api = create({
    baseURL: 'http://localhost:80/Projetos_CC/Stock_Management_WS/stock_management/public/api/'
})

api.addResponseTransform( response => {
    if(!response.ok) throw response;
})

export default api;