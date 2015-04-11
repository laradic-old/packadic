@if($navigation->hasChildren())
    @foreach($navigation->getChildren() as $item)
        {!! $item->render('theme::navigation.default-child') !!}
    @endforeach
@endif

