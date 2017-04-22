
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Calculate
 */

public class Calculate extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Calculate() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HashMap<String, Double> weights = new HashMap<>();
		weights.put("AC", 15.0);
		weights.put("LM", 4.0);
		weights.put("WH", 3.0);
		weights.put("R", 2.0);
		weights.put("TV", 1.0);
		weights.put("L", 1.0);
		weights.put("CP", 1.0);
		weights.put("C", 1.0);
		weights.put("T", 2.0);
		weights.put("M", 2.0);
		weights.put("CM", 2.0);
		weights.put("D", 2.0);
		weights.put("B", 0.6);
		weights.put("LIC", 0.0);
		double kWH = 0.0;
		double gal = 0.0;
		double fuel = 0.0;
		int timesShowered = Integer.parseInt(request.getParameter("nshowered"));
		int showerDuration = Integer.parseInt(request.getParameter("tshowered"));
		int timesFlushed = Integer.parseInt(request.getParameter("tflushed"));
		int timesWasher = Integer.parseInt(request.getParameter("twasher"));
		String[] checked = request.getParameterValues("electric");
		double highwayMPG = Double.parseDouble(request.getParameter("hmpg"));
		double cityMPG = Double.parseDouble(request.getParameter("cmpg"));
		double miles = Double.parseDouble(request.getParameter("miles"));
		gal += ((timesShowered * showerDuration * 3) + (timesFlushed * 2) + 22.5*timesWasher);
		for (String check : checked) {
			kWH += weights.get(check);
		}
		boolean LIC = false;
		for(String check : checked){
			if(check.equals("LIC")){
				LIC = true;
				break;
			}
		}
		if(LIC){
			gal+=15;
			kWH+=5;
			fuel+=(0.3);	
		}
		fuel += (((miles * .35) / highwayMPG + (miles * .65) / cityMPG) * 2);
		System.out.println("Gallons: " + gal);
		System.out.println("kWH: " + kWH);
		System.out.println("Gas: " + fuel);
		request.setAttribute("gal", gal);
		request.setAttribute("kwh", kWH);
		request.setAttribute("gas", fuel);
		request.getRequestDispatcher("results.jsp").forward(request, response);
	}

}
