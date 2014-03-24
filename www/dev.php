<?php
// PARALLAX PHP ----------------------- TESTING ENVIRONMENT
error_reporting(E_ALL);
// HOME
$page='Dev';

include('php/header-new.php');

// Include Projects Data
include('php/project-grid.php');

?>

<div id="men">
  <!-- <ul><li>Home</li><li>Away</li><li>Here</li><li>There</li></ul> -->
  <?php newBootMenu($sitePages, $page, 'cl-effect-21'); ?>
</div>



<div id="par">

  <div class="par-container marq">
    <div class="lax2 sun-light"></div>
    <div class="lax2 bg-logo"></div>
  </div>


      <?php include('php/home/black-text.php'); ?>


  <div class="par-container nord-jacket">
    <div class="lax1 g-nord"></div>
    <div class="lax2 j-jacket"></div>
  </div>


      <?php include('php/home/feat-work.php'); ?>


  <div class="par-container man-holder">
    <div class="lax1 man-phone"></div>
  </div>


      <?php include('php/home/meet-team.php'); ?>


  <div class="par-container dog-holder">
    <div class="lax1 dog"></div>
  </div>


      <?php include('php/home/grey-text.php'); ?>


  <div class="par-container stairs-girl">
    <div class="lax1 stairs"></div>
    <div class="lax1 girl"></div>
  </div>


</div>




<?php include('php/footer.php'); ?>