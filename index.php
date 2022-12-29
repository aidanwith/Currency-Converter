<?php
header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', 'On');

$API_KEY = *REDACTED*;
$API_URL = "https://v6.exchangerate-api.com/v6/$API_KEY/latest/USD";

$ch = curl_init($API_URL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
curl_close($ch);

echo $data;
?>