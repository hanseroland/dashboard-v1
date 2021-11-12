import React,{useContext} from 'react'
import Sidebar from '../components/Sidebar/Index'
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from '../context/themeContext'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'


const AdminLayout = ({children}) => {

    const context = useContext(ThemeContext);
    const { theme } = context;

    return ( 
        <>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Sidebar/> 
            {children}
          </ThemeProvider>
        </>
    )
}  

export default AdminLayout