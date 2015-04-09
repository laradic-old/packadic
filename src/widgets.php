<?php

Widgets::create('test', function($name){
    echo view('theme::widgets.test', compact('name'))->render();
});


Widgets::create('box', function($title, $icon, $a){
    echo view('theme::widgets.test', compact('name'))->render();
});


Widgets::create('table', function($name){
    echo view('theme::partials.table', compact('name'))->render();
});
