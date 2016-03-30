const breakpoints = {
    phonePortrait: {
        name: 'phonePortrait',
        min: 320,
        max: 414,
        template: 414
    },
    phoneLandscape: {
        name: 'phoneLandscape',
        min: 415,
        max: 667,
        template: 415
    },
    tabletPortrait: {
        name: 'tabletPortrait',
        min: 668,
        max: 768,
        template: 768
    },
    tabletLandscape: {
        name: 'tabletLandscape',
        min: 769,
        max: 1024,
        template: 1024
    },
    desktop: {
        name: 'desktop',
        min: 1025,
        max: 1366,
        template: 1025
    },
    desktopWide: {
        name: 'desktopWide',
        min: 1367,
        max: 1680,
        template: 1367
    },
    desktopHD: {
        name: 'desktopHD',
        min: 1681,
        max: 1920,
        template: 1681
    },
    desktopMega: {
        name: 'desktopMega',
        min: 1921,
        max: 2560,
        template: 1921
    }
};

export default breakpoints;