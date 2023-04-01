export type  User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    birthdate: Date

}

export type SignUpForm = Omit<User, 'id'>

export type Movie = {
    title: string;
    id: number;
    poster_path: string;
    overview: string;
    backdrop_path?: string | null;
    budget: string;
    homepage: string;
    release_date: string;
    vote_count: number;
};

// type para Banner

export type InfoMovies = {
     items: Partial<Movie>[]
     text?: string
};


//type para search

export type FormsFields = {
    query: string
};

