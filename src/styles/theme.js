const globalTheme = {
    switchWidth: '40px',
    switchHeight: '20px',
    switchPadding: '3px',
    colorContrastLow: '#d3d3d4',
    colorWhite: '#FFF',
    switchColorPrimary: '#302C40',
    switchAnimationDuration: '0.2s',
    gradient: 'linear-gradient(122deg, #5DC399 0%, #008647 100%)',
    colorGreen: '#008647',
    colorGray: '#adadad',
    colorBlue: '#1a1359',
    colorYellow: '#fbf000'
}


export const lightTheme = {
    primary: '#FFF',
    secondary: '#F8F8F8',
    third: '#302C40',
    textColor: '#585280',
    textWhite: '#fff',
    header: '#585280',
    headerNumber: '#FFF',
    activeMenu: '#fbf000',
    ...globalTheme 
}

export const darkTheme = {
    primary: '#302C40',
    secondary: '#2C2839',
    textColor: '#FFF',
    header: '#FFF',
    headerNumber: '#585280',
    activeMenu: '#FFF',
    ...globalTheme
}