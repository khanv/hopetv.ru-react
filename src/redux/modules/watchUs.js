// import LocatorApi from 'api/Locator';

const LOCATOR_OPEN     = 'hope/watchUs/locator/open';
const LOCATOR_CLOSE    = 'hope/watchUs/locator/close';
const LOCATOR_REGION   = 'hope/watchUs/locator/region';
const LOCATOR_CITY     = 'hope/watchUs/locator/city';
const LOCATOR_PROVIDER = 'hope/watchUs/locator/provider';

const initialState = {
    locatorActive: false,
    region: null,
    city: null,
    provider: null
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOCATOR_OPEN:
            return {
                locatorActive: true,
                region: null,
                city: null,
                provider: null
            };
        case LOCATOR_CLOSE:
            return {
                ...state,
                locatorActive: false
            };
        case LOCATOR_REGION:
            return {
                ...state,
                region: action.payload,
                city: null,
                provider: null
            };
        case LOCATOR_CITY:
            return {
                ...state,
                city: action.payload,
                provider: null
            };
        case LOCATOR_PROVIDER:
            return {
                ...state,
                provider: action.payload
            };

        default:
            return state;
    }
}

export function toggle(state) {
    return {
        type: state ? LOCATOR_OPEN : LOCATOR_CLOSE
    };
}

export function region(id) {
    return (dispatch) => {
        // const region = LocatorApi.getRegion(id);
        dispatch({
            type: LOCATOR_REGION,
            payload: id
        });
    };
}

export function city(id) {
    return {
        type: LOCATOR_CITY,
        payload: id
    };
}

export function provider(id) {
    return {
        type: LOCATOR_PROVIDER,
        payload: id
    };
}
