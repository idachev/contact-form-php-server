# Contact Form PHP Server

This is a simple Contact Form PHP server part written to send an email.

The form php code uses [PHPMailer](https://github.com/PHPMailer/PHPMailer) 
please download its source and put it in a folder `./phpmailer`
when deployed to your server.

The `contact_send.php` looks for the phpmailer at the same level:
```bash
./phpmailer/...
./config.php
./contact_send.php
```

## Config

You can check the config file in `./src/config.php` for details.

## Testing

Check the `./test/...` for simple HTML/CSS/JS code for the contact form usage,
style and validation.

You must set your HTTP server URLs in the `./test/contact-form.html`.

There is validation in `./test/contact-form-validation.js` for name, email, and message.

The validation set for the name is at least two symbols, and for the message, it is at least 50 symbols.

<img src="./test/test-form-view.jpg" alt="Test Form View"></img>

## Credits

* The main hard of the code is using https://github.com/PHPMailer/PHPMailer
* The CSS spinner code is from https://css-loaders.com/spinner/
* Some parts of the CSS are from Jekyll theme https://jekyllthemes.io/theme/mria-multipurpose-jekyll-theme
