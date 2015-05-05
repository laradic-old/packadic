<?php
/**
 * Part of the Robin Radic's PHP packages.
 *
 * MIT License and copyright information bundled with this package
 * in the LICENSE file or visit http://radic.mit-license.com
 */
namespace Laradic\Packadic;

use Laradic\Extensions\Extension;
use Laradic\Support\Path;

/**
 * This is the Extension.
 *
 * @package        Laradic\Packadic
 * @version        1.0.0
 * @author         Robin Radic
 * @license        MIT License
 * @copyright      2015, Robin Radic
 * @link           https://github.com/robinradic
 */
class PackadicExtension extends Extension
{

    protected $version = '1.0.0';

    protected $dependencies = [
        // 'laradic/admin' => '1.x || >=2.5.0 || 5.0.0 - 7.2.3'
    ];
    protected $providers = [
        'Laradic\Themes\ThemeServiceProvider',
        'Cartalyst\Alerts\Laravel\AlertsServiceProvider',
    ];

    protected $aliases = [
        'Alert' => 'Cartalyst\Alerts\Laravel\Facades\Alert'
    ];

    protected $themes = false;

    /**
     * Returns an array with slug, namespace, version and dependencies
     *
     * @return array
     */
    public static function getInfo()
    {
        return [
            'name'        => 'Packadic theme',
            'slug'        => 'laradic/packadic',
            'description' => 'A packadic theme',
            'author'      => 'Robin Radic'
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function register()
    {
        /** @var \Illuminate\Foundation\Application $app */
        $app = parent::register();


        $app->make('config')->set('cartalyst.alerts.classes', [ 'error' => 'danger' ]);
    }

    /**
     * {@inheritDoc}
     */
    public function boot()
    {
        /** @var \Illuminate\Foundation\Application $app */
        $app = parent::boot();
        $themes = $app->make('themes');
        $themes->addNamespacePublisher('theme', Path::join($this->getPath(), 'resources/theme') );
        $themes->addNamespace('theme', 'theme');
    }

    public function onInstalled()
    {
        // publish theme namespace
        $this->app->make('themes')->publish('theme');
    }
}
