export interface ISvgComponentProps {
    svgProps?: React.SVGProps<SVGSVGElement>;
    pathProps?: React.SVGProps<SVGPathElement>;
    path2Props?: React.SVGProps<SVGPathElement>;
    path3Props?: React.SVGProps<SVGPathElement>;
    path4Props?: React.SVGProps<SVGPathElement>;
    path5Props?: React.SVGProps<SVGPathElement>;
}

export interface ICountryNameResponse {
    common: string;
    official: string;
}

export interface ICountryResponse {
    cca2: string;
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: ICountryNameResponse;
        };
    };
    idd: {
        root: string;
        suffixes: string[];
    };
}

export interface ICountryPhonePrefix {
    name: string;
    prefix: string;
    code: string;
    flag: string;
}