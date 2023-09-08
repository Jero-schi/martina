const accessUrl = `https://accounts.google.com/o/oauth2/v2/auth?
scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&
include_granted_scopes=true&
response_type=token&
state=state_parameter_passthrough_value&
redirect_uri=https%3A//oauth2.example.com/code&
client_id=760926132919-u16uclkrraro9p9151327h4mk1ea8ofp.apps.googleusercontent.com`

/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
function oauthSignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);
  
    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': '760926132919-u16uclkrraro9p9151327h4mk1ea8ofp.apps.googleusercontent.com',
                  'redirect_uri': 'https://jero-schi.github.io/martina/',
                  'response_type': 'token',
                  'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                  'include_granted_scopes': 'true',
                  'state': 'pass-through value'};
  
    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

oauthSignIn()

console.log('hola');

console.log(fetch('https://jero-schi.github.io/martina/'));

function fetchData(url) {
    return fetch(url)
}

fetchData('https://jero-schi.github.io/martina/')
    .then(res => res.json())
    .then(data => console.log(data))