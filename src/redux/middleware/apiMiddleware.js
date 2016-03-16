export default () => (next) => (action) => {
    const { promise, types, ...rest } = action;
    if (!promise) {
        return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });

    /* eslint-disable newline-per-chained-call */
    return promise().then(
        (result) => next({ ...rest, result, type: SUCCESS }),
        (error) => next({ ...rest, error, type: FAILURE })
    ).catch((error) => {
        console.error('MIDDLEWARE ERROR:', error);
        next({ ...rest, error, type: FAILURE });
    });
    /* eslint-enable newline-per-chained-call */
};
