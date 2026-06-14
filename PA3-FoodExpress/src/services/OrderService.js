class OrderService {

    constructor() {

        this.order = {

            id: null,

            customer: "",

            status: "Recibido"

        };

    }

    createOrder(customerName) {

        this.order = {

            id: Date.now(),

            customer: customerName,

            status: "Recibido"

        };

        return this.order;

    }

    updateStatus(status) {

        this.order.status = status;

        return this.order;

    }

    getOrder() {

        return this.order;

    }

}

export default new OrderService();