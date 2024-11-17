---
title: "Deploying Laravel 8 app on shared-hosting (Hostinger)"
description: "In this article, I’ll try to explain how you can deploy your laravel application on shared hosting platform."
published_at: 2020/04/30
slug: "deploying-laravel7-app-on-shared-hosting-hostinger"
external: true
external_url: https://dev.to/pushpak1300/deploying-laravel7-app-on-shared-hosting-hostinger-31cj
---
In this article, I’ll try to explain how you can deploy your laravel application on shared hosting.
I’ll use hostinger.com.

It is well discouraged to use shared hosting for your Laravel 8 app. There are other very cheap web hosting starting from $5 per month.

But some clients (- very low budget clients ) or circumstance (for instance, you want to have something tested and move on) might call for you to use shared hosting.

I will cover the following here:

**How to deploy your app to shared hosting (Hostinger).**
 
Step 1) Go to Add website section under Domain's section on panel(Hostinger Control Panel) and add your domain.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ve1va6vzcqdofv6ndtmr.png)
 
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/a0jfdvmkbqwvfg2p3mwj.png)

Step 2) Click Manage on the domain which you want to use.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/iaar1m0d4zn2rbopp1r8.png)

Step 3) Now you have to upload all source code of an application to Hostinger using SFTP, SSH access or Hostinger File Manager in the respective domain directory.

I assume you've finished building your app – at least a functional app that is working on your localhost. 

Let's say your laravel project is named laravel with the following folder structure:

 ![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/pai9yp29qn7sq1hys4r8.png)

* Using Hostinger File Manager: compress the entire project folder on your local machine. You'll get a zip file – laravel.zip and upload it on the root directory of your project and extract files in laravel folder.

* Using SSH: You can download the project using git in the root directory of your project using ssh client like [putty]('https://www.putty.org').

* Using SFTP: You can upload project files on the respective file directory using FileZilla.

after that, your file structure should look like this.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ox2uhkihenwzam9h3ws7.png)

Step 4) Open the laravel folder and MOVE the CONTENTS of the 'public' folder to your panel's public_html folder. You can as well delete the empty public folder now.

your public_html folder should look like this.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/9nhf8v5k3l95533as5mv.png)

Step 5) locate the index.php file from the public_html folder. Right-click on it and select Code Edit from the menu.

Change the following code from index.php file

```php
<?php


define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| our application. We just need to utilize it! We'll simply require it
| into the script here so that we don't have to worry about manual
| loading any of our classes later on. It feels great to relax.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Turn On The Lights
|--------------------------------------------------------------------------
|
| We need to illuminate PHP development, so let us turn on the lights.
| This bootstraps the framework and gets it ready for use, then it
| will load up this application so that we can run it and send
| the responses back to the browser and delight our users.
|
*/

$app = require_once __DIR__.'/../bootstrap/app.php';


$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);

```

to 

```php
<?php

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| our application. We just need to utilize it! We'll simply require it
| into the script here so that we don't have to worry about manual
| loading any of our classes later on. It feels great to relax.
|
*/

require __DIR__.'/../laravel/vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Turn On The Lights
|--------------------------------------------------------------------------
|
| We need to illuminate PHP development, so let us turn on the lights.
| This bootstraps the framework and gets it ready for use, then it
| will load up this application so that we can run it and send
| the responses back to the browser and delight our users.
|
*/

$app = require_once __DIR__.'/../laravel/bootstrap/app.php';


$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);

```

If everything went well, going to http://yourdomain.com should throw database errors (if you have models running on your app). Not to worry! The next phase is migrating your databases to your shared hosting.

Step 6) If Models are running on your application then you have to migrate tables to the database. I'm using sqlite database for migrating tables to the database.

Use ssh access or file manager create a 'database.sqlite' file in the 'laravel/database' directory. (Make Sure to give write and read permission) 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/d7lrc95mzk7aoi8i4q6r.png)

Now change 'DB_DATABASE' in .env file of your laravel folder.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/1ayndjmp5itmq6oo9069.png)

Ensure that these details are entered correctly.

Now using SSH in your laravel directory migrate all the files to a database.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ybkagilc8so92ktrekgt.png)


If all goes well, you should have your site working fine now. So go ahead and try it out.

If you have questions please let me know in comments.

Thank You!
