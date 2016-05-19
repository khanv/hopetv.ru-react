import Regions from 'data/ukraine.json';

export default class Locator {
    static getRegions() {
        return Regions;
    }

    static getRegion({ id = null, name = null } = {}) {
        if (id !== null) {
            return Regions.find((region) => {
                return region.id === id;
            });
        }
        if (name !== null) {
            return Regions.find((region) => {
                return region.title.text === name;
            });
        }

        return null;
    }

    static getCity({ regionId = null, id = null, name = null } = {}) {
        const region = this.getRegion({
            id: regionId
        });

        if (region === null) {
            return null;
        }

        if (id !== null) {
            return region.cities.find((city) => {
                return city.id === id;
            });
        }

        if (name !== null) {
            return region.cities.find((city) => {
                return city.title === name;
            });
        }

        return null;
    }

    static getProvider({ regionId = null, cityId = null, id = null, shortId = null } = {}) {
        const city = this.getCity({
            regionId,
            id: cityId
        });

        if (city === null) {
            return null;
        }

        if (id !== null) {
            return city.providers.find((provider) => {
                return provider.id === id;
            });
        }

        if (shortId !== null) {
            return city.providers.find((provider) => {
                return provider.id === `${cityId}-${shortId}`;
            });
        }

        return null;
    }
}
