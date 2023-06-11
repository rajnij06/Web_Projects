const error = {
    errorPage: function() {
        // Fill in/modify anything below!
        return `
          <!doctype html>
          <html>
            <head>
                <link rel="stylesheet" type="text/css" href="css/style.css" />
            </head>
            <body>
                <div id="page">	
                    <h1>Guess The Word</h1>	
                    <nav class="error-message">
                        <li>Incorrect log in user name</li>
                        <li><a href="/">Go back to LogIn page</a></li>
                    </nav>
                </div>
            </body>
        </html>
      `;
    },
};
module.exports = error;