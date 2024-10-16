import { Theme, Themes } from "../models/theme";

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: '#4682b4',
        backgroundPrimaryInvert: 'black',
        backgroundSecondary: '#edf0f1',
        backgroundTodo: '#fff',
        colorTodo: 'black',
        colorDone: 'green',
        colorNotDone: 'red'
    }
}

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: 'black',
        backgroundPrimaryInvert: '#4682b4',
        backgroundSecondary: 'rgba(95,95,95,1)',
        backgroundTodo: 'rgba(110,110,110,1)',
        colorTodo: '#fff',
        colorDone: 'white',
        colorNotDone: 'yellow'
    }
}

export const themes: Themes = { light, dark }