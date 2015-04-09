<link href="{{ URL::asset('/laradic/debug/debugbar/stylesheet.css') }}" rel="stylesheet" type="text/css">
<script>
    (function(){
        packadic.bindEventHandler('starting', function(){
            require([ 'jquery', 'debugbar', 'plugins/highlightjs', 'plugins/bootstrap' ], function( $, PhpDebugBar, highlightjs ){
                console.log(PhpDebugBar);
                <?php
                $render = App::make('debugbar')->getJavascriptRenderer()->render();
                $render = str_replace('<script type="text/javascript">', '', $render);
                $render = str_replace('</script>', '', $render);
                echo $render;
                ?>
            })
        });
    }.call())
</script>
