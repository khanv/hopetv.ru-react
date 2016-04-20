import Regions from 'data/ukraine.json';

class Locator {
    static getRegions() {
        return Regions;
    }

    static getRegion(id) {
        return Regions.find((region) => {
            return region.id === id;
        });
    }
}
