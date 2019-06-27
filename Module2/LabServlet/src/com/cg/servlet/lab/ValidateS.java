package com.cg.servlet.lab;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/ValidateS")
public class ValidateS extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public ValidateS() {
        super();
        
    }

	
	public void init(ServletConfig config) throws ServletException {
		
	}

	
	public void destroy() {
		
	}

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String unm=request.getParameter("user");
		String pwd=request.getParameter("pwd");
		PrintWriter pw=response.getWriter();
		
		if(unm.equalsIgnoreCase("admin")&&pwd.equalsIgnoreCase("admin"))
        {
        	
       	   RequestDispatcher rdSucess=request.getRequestDispatcher("/SuccessS");
       	   rdSucess.forward(request, response);
        }
        else {
        	
      	  RequestDispatcher rfFailure=request.getRequestDispatcher("/FailureS");
      	  rfFailure.forward(request, response);
        } 
	}

}
