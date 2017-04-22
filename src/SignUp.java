
import java.io.IOException;
import java.math.BigInteger;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
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
import javax.swing.plaf.synth.SynthSpinnerUI;

/**
 * Servlet implementation class SignUp
 */
public class SignUp extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor.
	 */
	public SignUp() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String auth = (String)request.getSession().getAttribute("auth");
		if(auth!=null && auth.equals("yes")){
			response.sendRedirect("/profile");
		}else{
			request.getRequestDispatcher("signup.jsp").forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String username = (String) request.getParameter("username");
		String password = (String) request.getParameter("password");
		String cpassword = (String) request.getParameter("cpassword");
		if (!password.equals(cpassword)) {
			request.getSession().setAttribute("sError", "Password's Don't Match");
			response.sendRedirect("/signup");
		} else {
			try {
				if (!exists(username)) {
					password = hash(password);
					request.getSession().setAttribute("auth", "yes");
					request.getSession().setAttribute("user", username);
					request.getSession().setAttribute("sError", "");
					insertData(username, password);
				}else{
					request.getSession().setAttribute("sError", "Username Already Exists");
					response.sendRedirect("/signup");
				}
			} catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
				request.getSession().setAttribute("sError", "An Unexpected Error Has Occured. Please Try Again Later");
				response.sendRedirect("/signup");
				e.printStackTrace();
			}
			
		}
		System.out.println(username);
	}

	public static void insertData(String user, String pass) {
		try {
			Class.forName("org.postgresql.Driver");
			Connection con = DriverManager.getConnection(System.getenv("JDBC_DATABASE_URL"));
			PreparedStatement stmt = con.prepareStatement("INSERT INTO credentials (USERNAME, PASSWORD) VALUES (?, ?)");
			stmt.setString(1, user);
			stmt.setString(2, pass);
			stmt.executeUpdate();
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static String hash(String toHash) throws NoSuchAlgorithmException, InvalidKeySpecException {
		int iterations = 1000;
		char[] chars = toHash.toCharArray();
		byte[] salt = getSalt();

		PBEKeySpec spec = new PBEKeySpec(chars, salt, iterations, 512);
		SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
		byte[] hash = skf.generateSecret(spec).getEncoded();
		return iterations + ":" + toHex(salt) + ":" + toHex(hash);
	}

	public static byte[] getSalt() throws NoSuchAlgorithmException {
		SecureRandom sr = SecureRandom.getInstance("SHA1PRNG");
		byte[] salt = new byte[32];
		sr.nextBytes(salt);
		return salt;
	}

	public static String toHex(byte[] salt) {
		BigInteger bi = new BigInteger(1, salt);
		String hex = bi.toString(16);
		int paddingLength = (salt.length * 2) - hex.length();
		if (paddingLength > 0) {
			return String.format("%0" + paddingLength + "d", 0) + hex;
		} else {
			return hex;
		}
	}

	public static boolean exists(String user) {
		String temp = "";
		try {
			Class.forName("org.postgresql.Driver");
			Connection con = DriverManager.getConnection(System.getenv("JDBC_DATABASE_URL"));
			PreparedStatement stmt = con.prepareStatement("SELECT * FROM credentials WHERE USERNAME = ?");
			stmt.setString(1, user);
			ResultSet rs = stmt.executeQuery();
			con.close();
			if (!rs.isBeforeFirst()) {
				temp = "";
			} else {
				rs.next();
				temp = rs.getString("PASSWORD");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (temp.length() > 0) {
			return true;
		}
		return false;
	}

}
