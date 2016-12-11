<?php
    function my_theme_enqueue_styles_scripts() {
        $parent_style = 'parent-style';
        $jquery = 'jquery';
        
        wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
        
        wp_enqueue_style( 'child-style',
            get_stylesheet_directory_uri() . '/style.css',
            array( $parent_style ),
            wp_get_theme()->get('Version')
        );

        wp_enqueue_script(
            'blockadblock',
            get_stylesheet_directory_uri() . '/js/blockadblock.js',
            array( $jquery )
        );

        wp_enqueue_script(
            'pakgamers_script',
            get_stylesheet_directory_uri() . '/js/pakgamers_script.js',
            array( $jquery )
        );
    }
    add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles_scripts' );
?>