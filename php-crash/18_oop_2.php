<?php

abstract class Customer {
    // attributes
    private $id;
    private $name;
    protected $email;
    private $balance;

    // constructor function
    public function __construct($id, $name, $email, $balance) {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
        $this->balance = $balance;
    }

    abstract public function getEmail();
}

// $customer1 = new Customer(1, 'john', 'john@gmail.com', 0);

class Subscriber extends Customer{
    public $plan;
    
    public function __construct($id, $name, $email, $balance, $plan) {
        parent::__construct($id, $name, $email, $balance);
        $this->plan = $plan; 
    }

    public function getEmail() {
        return $this->email;
    }
}

$subsrciber1 = new Subscriber(1, 'tom', 'tom@gmail.com', 0, 'pro');

// echo $subsrciber1->getEmail();



// Static properties

class User {
    public $username;
    public $password;
    public static $passwordLength = 5;

    public static function getPasswordLength() {
        return self::$passwordLength;
    }
}


echo User::getPasswordLength();

