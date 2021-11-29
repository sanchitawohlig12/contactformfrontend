import http from "../http-common";

class CustomerService {
    getAll() {
        return http.post("/customers");
    }

    // get(id) {
    //     return http.get(`/tutorials/${id}`);
    // }

    create(data) {
        return http.post("/customers", data);
    }

    // update(id, data) {
    //     return http.put(`/tutorials/${id}`, data);
    // }

    // delete(id) {
    //     return http.delete(`/tutorials/${id}`);
    // }

    // deleteAll() {
    //     return http.delete(`/tutorials`);
    // }

    // findByTitle(title) {
    //     return http.get(`/tutorials?title=${title}`);
    // }
    findByfirstName(data) {
        // console.log("error", data)
        return http.post("/customers/key", data);
    }
}

export default new CustomerService();