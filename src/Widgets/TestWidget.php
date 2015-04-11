<?php
/**
 * Part of the Laradic packages.
 */
namespace Laradic\Packadic\Widgets;

use Radic\BladeExtensions\Widgets\Widget;

/**
 * Class TestWidget
 *
 * @package     Laradic\Packadic\Widgets
 * @author      Robin Radic
 * @license     MIT
 * @copyright   2011-2015, Robin Radic
 * @link        http://radic.mit-license.org
 */
class TestWidget extends Widget
{
    public function run(array $params = array())
    {
        $this->with([
            'name' => 'My name'
        ]);
    }

    public function getName()
    {
        return 'test';
    }

    public function getViewName()
    {
        return 'theme::widgets.test';
    }
}
