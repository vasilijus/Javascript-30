<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hold Shift to Check Multiple Checkboxes</title>
  <link rel="stylesheet" href="styles.css"/>
</head>
<body>

  <div class="inbox">
    <div class="item">
      <input type="checkbox">
      <p>This is an inbox layout.</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Check one item</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Hold down your Shift key</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Check a lower item</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Everything in between should also be set to checked</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Try to do it without any libraries</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Just regular JavaScript</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Good Luck!</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Don't forget to tweet your result!</p>
    </div>
  </div>

   <!--
   The following is a common layout you would see in an email client.
   When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes inbetween those two checkboxes should be checked.
  -->
  
<script>

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleChecked(e) {
  // check if SHIFT key down
  // AND check that they are chcking it
  let inBetween = false;
  if( e.shiftKey && this.checked ) {
    checkboxes.forEach( (checkbox) => {
      console.log(checkbox);
      if ( checkbox === this || checkbox === lastChecked ) {
        inBetween = !inBetween;
        console.log('starting to check inbetween')
      }
      if ( inBetween ) {
        checkbox.checked = true;
      }
    });
  }

  // console.log(e);
  lastChecked = this;
}

checkboxes.forEach( (checkbox) => checkbox.addEventListener('click', handleChecked ));

</script>
</body>
</html>