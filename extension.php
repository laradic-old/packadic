<?php

use Illuminate\Contracts\Foundation\Application;
use Laradic\Extensions\Extension;
use Laradic\Extensions\ExtensionFactory;

return array(
    'name'         => 'Packadic theme',
    'slug'         => 'laradic/packadic',
    'dependencies' => [ ],
    'handles'      => [
        'theme' => false
    ],
    'register'     => function (Application $app, Extension $extension, ExtensionFactory $extensions)
    {
        $app->register('Laradic\Packadic\PackadicServiceProvider');
    },
    'boot'         => function (Application $app, Extension $extension, ExtensionFactory $extensions)
    {
        $app->make('themes')
            ->addNamespace('theme', __DIR__ . '/resources/theme')
            ->addNamespacePublisher('theme', __DIR__ . '/resources/theme');
    },
    'install'      => function (Application $app, Extension $extension, ExtensionFactory $extensions)
    {
       /* $app->make('themes')
            ->addNamespace('theme2', __DIR__ . '/resources/theme')
            ->addNamespacePublisher('theme2', __DIR__ . '/resources/theme')
            ->publish('theme2'); */
    }
);
