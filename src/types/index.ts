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
}