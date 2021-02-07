export const mobile = 767;
export const tabletMin = 768;
export const tabletMax = 1023;
export const desktop = 1024;

export const isMobile = `(max-width:${mobile}px)`;
export const isMobileAndTablet = `(max-width:${tabletMax}px)`;
export const isTablet = `(min-width:${tabletMin}px) and (max-width:${tabletMax}px)`;
export const isTabletAndDesktop = `(min-width:${tabletMin}px)`;
export const isDesktop = `(min-width:${desktop}px)`;
