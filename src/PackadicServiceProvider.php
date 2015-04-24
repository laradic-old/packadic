<?php
/**
 * Part of the Radic packages.
 */
namespace Laradic\Packadic;

use Laradic\Support\ServiceProvider;
use Laradic\Themes\Traits\ThemeProviderTrait;

/**
 * Class PackadicServiceProvider
 *
 * @package     Laradic\Packadic
 * @author      Robin Radic
 * @license     MIT
 * @copyright   2011-2015, Robin Radic
 * @link        http://radic.mit-license.org
 */
class PackadicServiceProvider extends ServiceProvider
{

    protected $providers = [
        'Laradic\Themes\ThemeServiceProvider',
        'Cartalyst\Alerts\Laravel\AlertsServiceProvider',
    ];

    protected $aliases = [
        'Alert' => 'Cartalyst\Alerts\Laravel\Facades\Alert'
    ];

    public function boot()
    {
        /** @var \Illuminate\Foundation\Application $app */
        $app = parent::boot();
    }

    public function register()
    {
        /** @var \Illuminate\Foundation\Application $app */
        $app = parent::register();

        #$config = $app->make('config');
        $app->make('config')->set('cartalyst.alerts.classes', [ 'error' => 'danger' ]);
    }
}
