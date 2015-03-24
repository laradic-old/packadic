<!DOCTYPE html><!--[if IE 8]>
<html class="ie8" lang="en"><![endif]-->
<!--[if IE 9]>
<html lang="en" class="ie9"><![endif]-->
<!--[if !IE]><!-->
<html lang="en"><!--<![endif]-->
<head>
    <title>
        @section('title')
            {{ isset($pageTitle) ? $pageTitle . ' | ' : '' }}{{ isset($pageSubtitle) ? $pageSubtitle . ' | ' : '' }}{{ $site_name or "Docs" }}
        @show
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <script>
        (function(){
            window.startXdebug = function(){
                document.cookie = 'XDEBUG_SESSION=' + 'PHPSTORM' + ';path=/;';
                document.cookie = 'XDEBUG_SESSION=' + '' + ';expires=Mon, 05 Jul 2000 00:00:00 GMT;path=/;';
                document.location.reload();
            }
        }.call())
    </script>
    <link href="{{ Asset::url("theme::styles/base-stylesheet.css") }}" type="text/css" rel="stylesheet"/>
    @section('styles')
        <link href="{{ Asset::url("theme::styles/themes/theme-default.css") }}" type="text/css" rel="stylesheet"/>
    @show
</head>
<body class="page-loading section-top-fixed">


<div id="page-loader">
    <div class="loader loader-light"></div>
</div>
<!--section#top-->
<section id="top" class="navbar navbar-fixed-top">
    <!--header.top-->
    <header class="top">
        <div class="menu-toggler sidebar-toggler"><i class="fa fa-long-arrow-left"></i></div>
        <div class="page-logo">
            <div class="text-logo">@yield('site-name', 'Packadic')</div>
        </div>
        <!--nav.top-nav--><a data-toggle="collapse" data-target=".navbar-collapse" class="menu-toggler responsive-toggler btn btn-default" href="#"><i class="fa fa-bars fa-lg"></i></a>

        <div class="header-menu">
            @section('header-menu')
            <ul class="nav navbar-nav">
                @section('header-nav-menu')
                @show
            </ul>
            <ul class="nav navbar-nav pull-right">
                @section('header-nav-menu-right')
                @show
            </ul>
            @show
        </div>
    </header>
</section>
<div class="clearfix"></div>
<!--#page-->
<section id="page">
    <!--section#side-->
    <div class="sidebar-wrapper">
        <!--section#side aside-->
        <nav class="sidebar-nav navbar-collapse collapse">
            <div class="loader loader-light"></div>
            @section('sidebar-nav-menu')
                <ul data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" class="sidebar-nav-menu">

                </ul>
            @show
        </nav>
    </div>
    <!--section#content-->
    <div class="main-wrapper">
        <!--main-->
        <main>
            @section('page-header')
            <header class="content">
                <div class="page-title pull-left">
                    @section('page-header.left')
                        <h1>@yield('page-title', isset($pageTitle) ? $pageTitle : '')</h1>
                        <div class="page-subtitle">@yield('page-subtitle', isset($pageSubtitle) ? $pageSubtitle : '')</div>
                    @show
                </div>
                @section('page-header.right')
                    <ol class="breadcrumb page-breadcrumb pull-right">
                        @section('page-header.breadcrumbs')
                        @show
                    </ol>
                @show
            </header>
            @show
            <div class="content">
                @section('notifications')
                    @include('theme::partials.notifications')
                @show
                @section('content')
                    <div class="row">
                        <div class="col-md-12">Oops, this page doesn't have any content</div>
                    </div>
                @show
            </div>
        </main>
    </div>
</section>
<!--section#bottom-->
<section id="bottom" class="">
    <!--footer.bottom-->
    <footer class="bottom">
        <p>
            @section('footer-copyright')
                &copy; {{ date("Y") }} <a href="http://radic.mit-license.org">Robin Radic</a> - <a href="http://radic.mit-license.org">MIT License</a>
            @show
        </p>
    </footer>
</section>

@section('scripts.site-data')
    @include('theme::partials.site-data')
@show

@section('scripts.init')
    <script src="{{ Asset::url("theme::scripts/init.js") }}"></script>
    <script>
        (function(){

            var packadic = (window.packadic = window.packadic || {});

            packadic.mergeConfig({
                debug    : false,
                paths    : {
                    assets : "{{ Asset::url("theme::") }}",
                    scripts: "{{ Asset::url("theme::scripts") }}",
                    styles : "{{ Asset::url("theme::styles") }}"
                },
                requireJS: {
                    baseUrl: "{{ Asset::url("theme::scripts") }}",
                    paths  : {
                        'debugbar': '/laradic/debug/debugbar/javascript'
                    }
                }
            });


            packadic.bindEventHandler('booting', function(){
                console.info('(demo outside of project) event handler - BOOTING');
            });
            packadic.bindEventHandler('booted', function(){
                console.info('(demo outside of project) event handler - BOOTED');
                require(['theme', 'theme/sidebar'], function(theme, sidebar){
                    theme.init();
                    @if(isset($menu))
                        var sidebarConfig = {
                            hidden: false,
                            items: {!! json_encode($menu) !!}
                        };
                        sidebar.init(sidebarConfig);
                    @else
                        sidebar.init();
                    @endif
                })
            });
            packadic.bindEventHandler('starting', function(){
                console.info('(demo outside of project) event handler - STARTING');
            });
            packadic.bindEventHandler('started', function(){
                console.info('(demo outside of project) event handler - STARTED');
            });

        }.call());
    </script>

    @include('theme::partials.debugbar')
@show

@section('scripts.boot')
    <script src="{{ Asset::url("theme::scripts/boot.js") }}"></script>
@show

{{-- It conflicts with requirejs jquery, so this fixes it --}}
</body>
</html>
