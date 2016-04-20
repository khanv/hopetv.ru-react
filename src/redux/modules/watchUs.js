import LocatorApi from 'api/Locator';

const LOCATOR_CLOSE = 'hope/watchUs/locator/close';
const LOCATOR_REGION = 'hope/watchUs/locator/region';
const LOCATOR_CITY = 'hope/watchUs/locator/city';
const LOCATOR_PROVIDER = 'hope/watchUs/locator/provider';

const initialState = {
    region: null,
    city: null,
    operator: null
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOCATOR_CLOSE:
            return {
                region: null,
                city: null,
                operator: null
            };
        case LOCATOR_REGION:
            return {
                region: action.payload,
                city: null,
                operator: null
            };
        case LOCATOR_CITY:
            return {
                city: action.payload,
                operator: null
            };
        case LOCATOR_PROVIDER:
            return {
                provider: action.payload
            };

        default:
            return state;
    }
}

export function region(id) {
    return (dispatch) => {
        const region = LocatorApi.getRegion(id);
        dispatch({
            type: LOCATOR_REGION,
            payload: region
        });
    };
}

export function city(id) {
    return {
        type: LOCATOR_CITY,
        payload: city
    }
}

export function provider(id) {
    return {
        type: LOCATOR_PROVIDER,
        payload: provider
    }
}
