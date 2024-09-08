<?php
return [
    # The SMTP server host to use
    'smtp_host' => 'smtp.gmail.com',
    # The SMTP username to use
    'smtp_username' => '${CONTACT_FORM_SMTP_USERNAME}',
    # The SMTP password to use
    'smtp_password' => '${CONTACT_FORM_SMTP_PASSWORD}',
    'smtp_secure' => 'tls',
    'smtp_port' => 587,
    # The email address to which will send emails
    'to_email' => '${CONTACT_FORM_TO_EMAIL}',
    # URL Prefix to check for redirect on success or failure
    'redirect_url_prefix' => 'https://myserver.com/',
    # Will be included in the email subject
    'site_title' => 'test.COM',
    # A list of trusted domains, remove the localhost when deploying
    'trusted_domains' => ['myserver.com', 'localhost'],
];
?>