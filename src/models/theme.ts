export interface Theme {
    name: string,
    colors: {
        backgroundPrimary: string,
        backgroundPrimaryInvert: string,
        backgroundSecondary: string,
        backgroundTodo: string,
        colorTodo: string,
        colorDone: string,
        colorNotDone: string
    }
}

export interface Themes {
    [key: string]: Theme
}