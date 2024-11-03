<?php 
    // Simple Array 
     $numbers = [1, 44, 55, 22]; 
     $fruits = array('apple', 'orange', 'pear');

    //  print_r($numbers);
    //  var_dump($numbers);
    // echo $fruits[0];

    echo '<pre>';
        var_dump($numbers);
    echo '</pre>';

    // Associative Array
    $colors = [
        1 => 'red',
        4 => 'blue',
        6 => 'green'
    ];

    // echo $colors[4];


    $hex = [
        'red' => '#f00',
        'blue' => '#0f0',
        'green' => '#00f'
    ];

    // echo $hex['blue'];

    $person = [
        'first_name' => 'Saqlain',
        'last_name' => 'Javed',
        'email' => 'saqlain@gmail.com'
    ];

    // echo $person['first_name'];


    // Multi-Dimensional Array

    $people = [
        [
            'first_name' => 'tom',
            'last_name' => 'hendricks',
            'email' => 'tom@gmail.com'
        ],
        [
            'first_name' => 'dick',
            'last_name' => 'cockney',
            'email' => 'dick@gmail.com'
        ],
        [
            'first_name' => 'Jane',
            'last_name' => 'Doe',
            'email' => 'jane@gmail.com'
        ]
    ];

    // echo $people[1]['email'];
    // var_dump(json_encode($people));