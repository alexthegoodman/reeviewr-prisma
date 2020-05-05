export default err => {
    const { response } = err;
    if (typeof response !== "undefined" && response.status) {
        switch (response.status) {
            case 404:
                return 404;
            case 422:
                return response.data.errors;
            case 401:
                return 401;
            default:
                return false;
        }
    }

    return false;
};
