export type  User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    birthdate: Date
    token?: string | null;

}


export type LoginForm = {
    email: string;
    pass: string;
  };
  
  export type SignUpForm = Omit<User, 'id' | 'birthdate'> & { birthdate: Date}
  export type SignUpPayload = SignUpForm




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
    video?: Video[] | any

};

export type Video = {
    id: string
    key: string
  }

  export type Details = {
    items: Partial<Movie>[] | any
    video?: Video[] | any

  }

// type para Banner

export type InfoMovies = {
     items: Partial<Movie>[]
     text?: string
     clasName?:string
};


//type para search

export type FormsFields = {
    page: any
    query: string
};

