type ActionType = {
    type: string;
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const isLoggedInReducer = (state = false, { type }: ActionType) => {
    switch (type) {
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
};

export default isLoggedInReducer;
