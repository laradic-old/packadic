<!DOCTYPE html><!--[if IE 8]>
<html class="ie8" lang="en"><![endif]-->
<!--[if IE 9]>
<html lang="en" class="ie9"><![endif]-->
<!--[if !IE]><!-->
<html lang="en"><!--<![endif]-->
<head>
    @section('head')
        <title>
            @section('title')
                {{ isset($pageTitle) ? $pageTitle . ' | ' : '' }}{{ isset($pageSubtitle) ? $pageSubtitle . ' | ' : '' }}{{ $site_name or "Packadic" }}
            @show
        </title>
        @section('meta')
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="csrf-token" content="{{ csrf_token() }}"/>
        @show
        <script>
        </script>
        @section('links')
            {!! Asset::style("theme::styles/base-stylesheet.css") !!}
            {!! Asset::style("theme::styles/plugins.css") !!}
            {!! Asset::style("theme::styles/layout.css") !!}
            {!! Asset::style("theme::styles/components.css") !!}
            @section('styles')
                {!! Asset::style("theme::styles/themes/theme-default.css") !!}
            @show
            {!! Asset::style("theme::styles/fast.css") !!}
        @show
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
                @section('page-header.left')
                    <div class="page-title pull-left">
                        <h1>@yield('page-title', isset($pageTitle) ? $pageTitle : '')</h1>
                        <div class="page-subtitle">@yield('page-subtitle', isset($pageSubtitle) ? $pageSubtitle : '')</div>
                    </div>
                @show
                @section('page-header.right')
                    <ol class="breadcrumb page-breadcrumb pull-right">
                        @section('page-header.breadcrumbs')
                        @show
                    </ol>
                @show
            </header>
            @show
            <div class="content">
                @section('alerts')
                    @include('theme::partials.alerts')
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
    {!! Asset::script("theme::scripts/init.js") !!}
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
                    },
                    cm: {
                        css: '{{ Asset::url("theme::scripts") }}/plugins/codemirror/lib/codemirror.css',

                        themes : {
                            monokai : '{{ Asset::url("theme::scripts") }}/plugins/codemirror/theme/monokai.css',
                            ambiance: '{{ Asset::url("theme::scripts") }}/plugins/codemirror/theme/ambiance.css',
                            eclipse : '{{ Asset::url("theme::scripts") }}/plugins/codemirror/theme/eclipse.css',
                            twilight : '{{ Asset::url("theme::scripts") }}/plugins/codemirror/theme/twilight.css',
                            zenburn : '{{ Asset::url("theme::scripts") }}/plugins/codemirror/theme/zenburn.css'
                        }
                    }
                }
            });

            packadic.bindEventHandler('booted', function(){
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
                });
                require(['autoload'], function(autoload){
                    autoload.scan($('body'), function(){
                        if(packadic.config.pageLoadedOnAutoloaded === true){
                            packadic.removePageLoader();
                        }
                    });
                });
            });

        }.call());
    </script>

    {{-- It conflicts with requirejs jquery, so this fixes it --}}
    @include('theme::partials.debugbar')
@show

@section('scripts.custom')
    {{-- Custom scripts here --}}
@show

@section('scripts.boot')
    {!! Asset::script("theme::scripts/boot.js") !!}
@show

</body>
</html>
