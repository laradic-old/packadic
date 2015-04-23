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
    use ThemeProviderTrait;

    protected $providers = [
        'Laradic\Themes\ThemeServiceProvider'
    ];

    public function boot()
    {
        /** @var \Illuminate\Foundation\Application $app */
        $app = parent::boot();
        $this->addNamespacePublisher('theme', __DIR__ . '/../resources/theme');
    }

    public function register()
    {
        /** @var \Illuminate\Foundation\Application $app */
        $app = parent::register();

        #$widgets = $app->make('blade.widgets');
        #$widgets->register('test', 'Laradic\Packadic\Widgets\TestWidget');
    }
}
