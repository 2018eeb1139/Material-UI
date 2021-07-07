import React from 'react'
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckBox from '@material-ui/core/CheckBox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';


const useStyles = makeStyles({
  root: {
    backgroundColor: 'orange',
    border: 0,
    borderRadius: '15px',
    color: 'white',
    padding: '0 30px',
    margin: '15px 0'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: '15px'
    }
  },
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[500]
    }
  }
})

function ButtonStyles() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={<CheckBox
        // defaultChecked
        // indeterminate
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        color="primary"
        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
      />}
      label="Testing"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </ToolBar>
            </AppBar>
            <Typography variant="h2">
              Welcome MUI
            </Typography>
            <Typography variant="subtitle">
              Welcome Hone ti the int main
            </Typography>
            <ButtonStyles />
            <Grid container spacing={2} justify="center">
              <Grid items>
                <Paper style={{ height: "75px", width: "50px" }} />
              </Grid>
              <Grid items>
                <Paper style={{ height: "75px", width: "50px" }} />
              </Grid>
              <Grid items>
                <Paper style={{ height: "75px", width: "50px" }} />
              </Grid>
              <Grid items>
                <Paper style={{ height: "75px", width: "50px" }} />
              </Grid>
            </Grid>
            <TextField
              variant="filled"
              style={{ color: "green", marginTop: "15px" }}
              label="name@example.com"
            />
            <CheckBoxExample />
            <ButtonGroup aria-label="large button group">
              <Button
                startIcon={<SaveIcon />}
                variant="contained"
                color="primary"
                href="#"
                size="large">
                save
              </Button>
              <Button
                endIcon={<DeleteIcon />}
                variant="contained"
                color="secondary"
                href="#"
                size="large">
                discard
              </Button>
            </ButtonGroup>
            {/* <ButtonGroup orientation="vertical" aria-label="large button group">
          <Button
          startIcon={<SaveIcon />}
          variant="contained"
          color="primary"
          href="#"
          size="large">
          save
          </Button>
          <Button
          endIcon={<DeleteIcon />}
          variant="contained"
          color="secondary"
          href="#"
          size="large">
          discard
          </Button>
        </ButtonGroup> */}
            <Button variant="outlined" color="secondary">primary</Button>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
