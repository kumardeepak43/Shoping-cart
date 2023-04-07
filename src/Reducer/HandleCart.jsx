const cart = [];

const HandleCart = (state = cart, action) => {
    const Materials = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // check if Materials is Already Exist
            const exist = state.find((x) => x.id === PromiseRejectionEvent.id);
            if (exist) {
                //increse the quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                const Materials = action.payload;
                return [
                    ...state,
                    {
                        ...Materials,
                        qty: 1,
                    }
                ]
            }
            break;

        default:
            break;

        case " DELITEM":
            const exist1 = state.find((x) => x.id === Materials.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === Materials.id ? { ...x, qty: x.qty - 1 } : x
                );
            }
            break;

            return
            state;
            break;
    }


}

export default handleCart;