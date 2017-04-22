<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html >
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
  <title>Sign-Up/Login Form</title>
  <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
      <link rel="stylesheet" href="style.css">

</head>

<body>

  <div class="form">
      
     
        <div id="signup">   
          <h1>Sign Up for Free</h1>
          
          <form action="/signup" method="post">
          
         <div class="field-wrap">
            <label>
              Username<span class="req">*</span>
            </label>
            <input type="text"required autocomplete="off" name="username"
            />
          </div>

          <div class="field-wrap">
            <label>
              Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off" name="password"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Confirm Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off" name="cpassword"/>
          </div>
          
          <p class="forgot"><a href="/login">Have an Account?</a></p>
          
          <button type="submit" class="button button-block">Get Started</button>
          
          <%
          	String a = (String)session.getAttribute("sError");
          	if(a==null){
          		a="";
          	}
          	session.setAttribute("sDisplay", a);
    
          
          %>
          <p style="color:red;"><%=session.getAttribute("sDisplay") %></p>
          
          
          </form>
		
        </div>        
      
</div> <!-- /form -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

    <script src="main.js"></script>

</body>
</html>
