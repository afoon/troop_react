import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    datePicker: {
      headerColor: '#ff5a6a',
      selectColor: '#ff5a6a',
      color: '#9E9E9E',
      calendarTextColor: '#9E9E9E'
    },
    palette:{
        primary1Color: '#ff5a6a'
    }
  });

const View =  ()=> (
<MuiThemeProvider muiTheme={muiTheme}>
    <App/>
</MuiThemeProvider>
    
)

ReactDOM.render(<View />, document.getElementById('root'));

