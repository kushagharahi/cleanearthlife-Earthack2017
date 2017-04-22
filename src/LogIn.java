

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class LogIn extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LogIn() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String auth = (String)request.getSession().getAttribute("auth");
		if(auth!=null && auth.equals("yes")){
			response.sendRedirect("/profile");
		}else{
			request.getRequestDispatcher("login.jsp").forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = (String) request.getParameter("username");
		String password = (String) request.getParameter("password");
		String dbinfo = getInfo(username);
		if(dbinfo.length()==0){
			request.getSession().setAttribute("lError", "Invalid Username or Password");
			response.sendRedirect("/");
		}else{
			try {
				if(checkPassword(password, dbinfo)){
					request.getSession().setAttribute("auth", "yes");
					request.getSession().setAttribute("user", username);
					request.getSession().setAttribute("lError", "");
					response.sendRedirect("/profile");
					
				}else{
					request.getSession().setAttribute("lError", "Invalid Username or Password");
					response.sendRedirect("/");
				}
			} catch (InvalidKeySpecException | NoSuchAlgorithmException e) {
				request.getSession().setAttribute("lError", "An Unexpected Error Has Occured. Please Try Again Later");
				response.sendRedirect("/");
				e.printStackTrace();
			}
		}
	}
	public static String getInfo(String user){
		String pass = "";
		try{
		Class.forName("org.postgresql.Driver");
		Connection con = DriverManager.getConnection(System.getenv("JDBC_DATABASE_URL"));
		PreparedStatement stmt = con.prepareStatement("SELECT * FROM credentials WHERE USERNAME = ?");
		stmt.setString(1, user);
		ResultSet rs = stmt.executeQuery();
		if (!rs.isBeforeFirst() ) {    
		    pass = "";
		}else{
			rs.next();
			pass = rs.getString("PASSWORD");
		}
		}catch(Exception e){
			e.printStackTrace();
		}
		return pass;
	}
	public static boolean checkPassword(String original, String stored) throws InvalidKeySpecException, NoSuchAlgorithmException{
		String[] parts = stored.split(":");
        int iterations = Integer.parseInt(parts[0]);
        byte[] salt = fromHex(parts[1]);
        byte[] hash = fromHex(parts[2]);
         
        PBEKeySpec spec = new PBEKeySpec(original.toCharArray(), salt, iterations, hash.length * 8);
        SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
        byte[] testHash = skf.generateSecret(spec).getEncoded();
         
        int diff = hash.length ^ testHash.length;
        for(int i = 0; i < hash.length && i < testHash.length; i++)
        {
            diff |= hash[i] ^ testHash[i];
        }
        return diff == 0;
	}
	private static byte[] fromHex(String hex) throws NoSuchAlgorithmException
    {
        byte[] bytes = new byte[hex.length() / 2];
        for(int i = 0; i<bytes.length ;i++)
        {
            bytes[i] = (byte)Integer.parseInt(hex.substring(2 * i, 2 * i + 2), 16);
        }
        return bytes;
    }

}
