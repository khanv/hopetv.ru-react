import Regions from 'data/ukraine.json';

export default class Locator {
    static getRegions() {
        return Regions;
    }

    static getRegion(id) {
        return Regions.find((region) => {
            return region.id === id;
        });
    }
}
