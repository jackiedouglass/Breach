import React, { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import { CssBaseline, Paper } from '@material-ui/core';
import PermanentDrawerLeft from '../material/SideNav';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

function About() {
  const [label, setLabel] = useState({});

  useEffect(() => {
    ipcRenderer.send('load-data', console.log('40, OpenSelect.js'));
    ipcRenderer.once('data-reply', (event, arg) => {
      setLabel(arg);
    });
  }, []);

  const styles = {
    listStyleType: 'none',
  };

  let theme;

  if (label.theme === 'Regular Hacker Mode') theme = createTheme(label.light);
  if (label.theme === 'Dark XSS Mode') theme = createTheme(label.dark);
  if (label.theme === 'Blue DOS Mode') theme = createTheme(label.blue);
  if (label.theme === 'Purple SQL Injection Mode') theme = createTheme(label.purple);
  if (label.theme === 'Green Forest Mode') theme = createTheme(label.green);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <center>
          <Typography variant='h4' color='textSecondary'>
            About
          </Typography>
        </center>
        <Paper elevation={3} className='about-paper'>
          <Typography variant='h5' color='textPrimary'>
            Version
          </Typography>
          <Typography variant='body1' color='textPrimary'>
            1.0
          </Typography>
          <br></br>
          <Typography variant='h5' color='textPrimary'>
            How it Works?
          </Typography>
          <Typography variant='body1' color='textPrimary'>
            Place a URL on the home page and watch the security readings once the load
            finishes
          </Typography>
          <br></br>
          <Typography variant='h5' color='textPrimary'>
            Who it's for?
          </Typography>
          <Typography variant='body1' color='textPrimary'>
            This app is for any developer looking to test their front end application for
            Cross-Site-Scripting vulnerabilities
          </Typography>
          <br></br>
          <Typography variant='h5' color='textPrimary'>
            Disclaimer
          </Typography>
          <Typography variant='body1' color='textPrimary'>
            Only for use on URLs that you have permission to test XSS
          </Typography>
        </Paper>
        <PermanentDrawerLeft />
      </div>
    </ThemeProvider>
  );
}

export default About;
