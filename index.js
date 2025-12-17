const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { google } = require('googleapis');

const app = express();
app.use(bodyParser.json());

// load credentials
const credentials = JSON.parse(fs.readFileSync('credentials.json'));
const { client_id, client_secret, redirect_uris } = credentials.web;

// OAuth2 Client
const oauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// scopes for Google Calendar
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

//  1: Generate Auth URL
app.get('/auth', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.redirect(authUrl);
});

//  2: OAuth2 callback
app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code;
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  // Save tokens for later use
  fs.writeFileSync('tokens.json', JSON.stringify(tokens));
  res.send('Google Calendar connected! You can now view and book slots.');
});

//  3: List Calendar Events
app.get('/events', async (req, res) => {
  oauth2Client.setCredentials(JSON.parse(fs.readFileSync('tokens.json')));
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  const events = await calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    maxResults: 20,
    singleEvents: true,
    orderBy: 'startTime',
  });

  res.json(events.data.items);
});

//  4: Create a Booking (Event)
app.post('/book', async (req, res) => {
  const { summary, startDateTime, endDateTime } = req.body;
  oauth2Client.setCredentials(JSON.parse(fs.readFileSync('tokens.json')));
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  const event = {
    summary,
    start: { dateTime: startDateTime },
    end: { dateTime: endDateTime },
  };

  const response = await calendar.events.insert({ calendarId: 'primary', resource: event });
  res.json(response.data);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
