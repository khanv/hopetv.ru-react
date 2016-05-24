import LocatorApi from 'api/Locator';
import { routerActions, LOCATION_CHANGE } from 'react-router-redux';

const basePath = 'watch-us';
const initialState = {
    locatorActive: false,
    region: null,
    city: null,
    provider: null
};

function buildUrl(state) {
    const parts = [''];
    parts.push(basePath);

    if (state.locatorActive) {
        parts.push('locator');
        if (state.region) {
            const region = LocatorApi.getRegion({
                id: state.region
            });
            parts.push(region.title.text);
            if (state.city) {
                const city = LocatorApi.getCity({
                    regionId: region.id,
                    id: state.city
                });
                parts.push(city.title);
                if (state.provider) {
                    parts.push(state.provider.slice(state.provider.lastIndexOf('-') + 1));
                }
            }
        }
    }

    return parts.join('/');
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOCATION_CHANGE:
            const [
                ,
                page = null,
                locator = false,
                regionName = null,
                cityName = null,
                providerShortId = null
            ] = action.payload.pathname.split('/');

            if (page !== basePath) {
                return state;
            }

            const region = LocatorApi.getRegion({
                name: decodeURIComponent(regionName)
            });

            const city = region ? LocatorApi.getCity({
                regionId: region.id,
                name: decodeURIComponent(cityName)
            }) : null;

            const provider = city ? LocatorApi.getProvider({
                regionId: region.id,
                cityId: city.id,
                shortId: providerShortId
            }) : null;

            return {
                locatorActive: locator === 'locator',
                region: region ? region.id : null,
                city: city ? city.id : null,
                provider: provider ? provider.id : null
            };
        default:
            return state;
    }
}

export function region(id, state) {
    return (dispatch) => {
        dispatch(
            routerActions.push(
                buildUrl({
                    ...state,
                    region: id
                })
            )
        );
    };
}

export function city(id, state) {
    return (dispatch) => {
        dispatch(
            routerActions.push(
                buildUrl({
                    ...state,
                    city: id,
                    provider: `${id}-1`
                })
            )
        );
    };
}

export function provider(id, state) {
    return (dispatch) => {
        dispatch(
            routerActions.push(
                buildUrl({
                    ...state,
                    provider: id
                })
            )
        );
    };
}

export function back(state) {
    return (dispatch) => {
        const newState = state;
        if (state.city !== null) {
            newState.city = null;
        } else {
            newState.region = null;
        }

        dispatch(
            routerActions.push(buildUrl(newState))
        );
    };
}

export function close() {
    return (dispatch) => {
        dispatch(
            routerActions.push(buildUrl({
                initialState
            }))
        );
    };
}

export function fullRegion(id) {
    const region = LocatorApi.getRegion({
        id
    });
    const city = region.cities[0];
    const cityId = city.id;
    const provider = city.providers[0];
    const providerId = provider.id;

    return (dispatch) => {
        dispatch(
            routerActions.push(
                buildUrl({
                    locatorActive: true,
                    region: id,
                    city: cityId,
                    provider: providerId
                })
            )
        );
    };
}
