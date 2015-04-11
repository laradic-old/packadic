<?php
/** @var \Laradic\Themes\Navigation\Node $navigation */
if ( $navigation->hasChildren() )
{
    $_class = is_null($navigation->getMeta('class')) ? '' : $navigation->getMeta('class');
    $_class .= 'dropdown-toggle';
    $navigation->addMeta('class', $_class);
    $navigation->addMeta('data-toggle', 'dropdown');
}
?>

<li>
    <a {!! $navigation->meta() !!}>{!! $navigation->getValue() !!}</a>
    @if($navigation->hasChildren())
        <ul class="dropdown-menu dropdown-wide">
            @foreach($navigation->getChildren() as $item)
                {!! $item->render('theme::navigation.default-child') !!}
            @endforeach
        </ul>
    @endif
</li>
