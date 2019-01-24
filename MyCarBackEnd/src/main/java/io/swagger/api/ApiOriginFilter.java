package io.swagger.api;

import java.io.IOException;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-10-25T10:59:21.087Z")

public class ApiOriginFilter implements javax.servlet.Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
            FilterChain chain) {
        HttpServletResponse res = (HttpServletResponse) response;
        res.addHeader("Access-Control-Allow-Origin", "*");
        res.addHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        res.addHeader("Access-Control-Allow-Headers", "Content-Type");
        try {
            chain.doFilter(request, response);
        } catch (IOException | ServletException e) {
            System.out.println(e.getMessage());
        }
    }

    @Override
    public void destroy() {
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }
}
