<ul class="nav navbar-nav pull-right">
    @foreach($navigation->getChildren() as $item)
        {!! $item->render('theme::navigation.default-child') !!}
    @endforeach
</ul>
