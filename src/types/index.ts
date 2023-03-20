export type  User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    birthdate: Date

}

export type SignUpForm = Omit<User, 'id'>



// type para Banner

export type SliderBanner = {
    items: [] | any
};

// type para Posters

export type SliderPosters ={
    items: [] | any
    text: string
};

//type para Grilla de Movies 

export type GridCardPosters ={
    items: [] | any
    text: string
};

// type para details

export type DetailsType ={
    items: [] | any
};

//type para search

export type FormsFields = {
    query: string 
};

