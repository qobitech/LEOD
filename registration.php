<?php include('server.php') ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/index.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>LOED</title>
</head>
<body>
    <div class="bg">
        <!-- Classic tabs -->
<div class="classic-tabs main-tab">

        <ul class="nav tabs-cyan" id="myClassicTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link  waves-light active show" id="profile-tab-classic" data-toggle="tab" href="#profile-classic"
              role="tab" aria-controls="profile-classic" aria-selected="true">login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-light" id="follow-tab-classic" data-toggle="tab" href="#follow-classic" role="tab"
              aria-controls="follow-classic" aria-selected="false">register</a>
          </li>
        </ul>
        <div class="tab-content border-right border-bottom border-left rounded-bottom" id="myClassicTabContent">
          <div class="tab-pane fade active show" id="profile-classic" role="tabpanel" aria-labelledby="profile-tab-classic">
              <form id="logForm" method="post" action="registration.php">
              <?php include('errors.php'); ?>
                  <label for="username">username</label>
                  <input type="text" name="username" placeholder="username" required>
                  <label for="password">password</label>
                  <input type="password" name="password" placeholder="password" required>
                  <div>
                      <input type="checkbox"><span>remember me</span>
                  </div>
                  <input type="submit"   name="login_user" value="login">
              </form>
              <a href="index.php" class="f-p">forgotten password?</a>
            
          </div>
          <div class="tab-pane fade" id="follow-classic" role="tabpanel" aria-labelledby="follow-tab-classic">

            <form id="reg" method="post" action="registration.php" >
              <label for="full name">full name</label>
              <input type="text" name="username" placeholder="username" value="<?php echo $username;?>" required >
              <label for="email">email</label>
              <input type="email" name="email" placeholder="....@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value="<?php echo $email; ?>" required>
              
              <label for="password">password</label>
              <input type="password" name="password_1" placeholder="password" id="password" minlength="8" maxlength="16" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
              <label for="re-enter password">re-enter password</label>
              <span class="message"></span>
              <input type="password" name="password_2" placeholder="re-enter password"  minlength="8" maxlength="16" id="reEnterPassword" required>
              
              <div>
                  <!-- <input type="checkbox"><span>remember me</span> -->
              </div>
              <input type="submit" name="reg_user" value="sign up">
          </form>
          <a href="registration.php" class="f-p">already have an account?</a>
          </div>
          
        </div>
      
      </div>
      <!-- Classic tabs -->
    </div>

    <script src='/js/index.js'></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>