<?php

use Illuminate\Contracts\Foundation\Application;
use Laradic\Extensions\Extension;
use Laradic\Extensions\ExtensionCollection;

return array(
    'name' => 'Packadic theme',
    'slug' => 'laradic/packadic',
    'dependencies' => [],
    'register' => function(Application $app, Extension $extension, ExtensionCollection $extensions)
    {
        $app->register('Laradic\Packadic\PackadicServiceProvider');
    },
    'boot' => function(Application $app, Extension $extension, ExtensionCollection $extensions)
    {

    }
);
