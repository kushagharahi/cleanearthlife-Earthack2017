

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Time
 */
@WebServlet("/time")
public class Time extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Time() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Scanner scan = new Scanner(new File("overTime.txt"));
		ArrayList<Double> water = new ArrayList<Double>();
		ArrayList<Double> kwh = new ArrayList<Double>();
		ArrayList<Double> gas = new ArrayList<Double>();
		while(scan.hasNext()){
			String[] temp = scan.next().split(",");
			water.add(Double.parseDouble(temp[0]));
			kwh.add(Double.parseDouble(temp[1]));
			gas.add(Double.parseDouble(temp[2]));
		}
		System.out.println(water.toArray(new Double[water.size()]));
		double waterarr[] = new double[water.size()];
		double kwharr[] = new double[water.size()];
		double gasarr[] = new double[water.size()];
		for(int i = 0; i < water.size(); i++){
			waterarr[i] = water.get(i);
			kwharr[i] = kwh.get(i);
			gasarr[i] = gas.get(i);
		}
		request.setAttribute("waterarr", Arrays.toString(waterarr));
		request.setAttribute("kwharr", Arrays.toString(kwharr));
		request.setAttribute("gasarr", Arrays.toString(gasarr));
		request.getRequestDispatcher("time.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
