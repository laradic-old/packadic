<?php
/**
 * Part of the Robin Radic's PHP packages.
 *
 * MIT License and copyright information bundled with this package
 * in the LICENSE file or visit http://radic.mit-license.com
 */
namespace Laradic\Packadic;

use Laradic\Extensions\Extension;

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
    }

    /**
     * {@inheritDoc}
     */
    public function boot()
    {
        /** @var \Illuminate\Foundation\Application $app */
        $app = parent::boot();
    }

    /**
     * Registration is the same as the service provider's register function.
     */
    public function registration()
    {
    }
}
