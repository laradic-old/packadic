<?php

use Illuminate\Contracts\Foundation\Application;
use Laradic\Extensions\Extension;
use Laradic\Extensions\ExtensionFactory;

return array(
    'name' => 'Packadic theme',
    'slug' => 'laradic/packadic',
    'dependencies' => [],
    'handle' => [
        'theme' => false
    ],
    'register' => function(Application $app, Extension $extension, ExtensionFactory $extensions)
    {
        $app->register('Laradic\Packadic\PackadicServiceProvider');
    },
    'boot' => function(Application $app, Extension $extension, ExtensionFactory $extensions)
    {

    }
);
