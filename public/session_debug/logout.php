<?php
require_once 'functions.php';

function pageController() {
    clearSession();
    redirect("login.php");
}
pageController();
