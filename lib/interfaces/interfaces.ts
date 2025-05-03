export interface childrenInterface {
    children: React.ReactNode;
}

export interface FeaturesTypes {
    icon: React.ReactNode;
    title: string;
    description: string;
}
export interface FaqsTypes {
    question: string;
    answer: string;
}

export interface howItWorkTypes {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface IndustriesTypes {
    id: string;
    name: string;
    subIndustries: string[];
}

export interface testimonialTypes {
    quote : string 
    author : string 
    image : string 
    role : string 
    company : string 
}

