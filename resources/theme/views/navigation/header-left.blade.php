<ul class="nav navbar-nav">
    @foreach($navigation->getChildren() as $item)
        {!! $item->render('theme::navigation.default-child') !!}
    @endforeach
</ul>
