/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 *
 * @author Josue Emmanuel Medina Garcia
 */
@WebServlet(name = "SubirImagen", urlPatterns = {"/SubirImagen"})
public class SubirImagen extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String arch = "C:\\Users\\Josue\\Desktop\\UTP\\Ciclo 6\\Desarrollo web integrado\\GoClass\\web\\Archivos";
        DiskFileItemFactory factory = new DiskFileItemFactory();
        factory.setSizeThreshold(1024);
        factory.setRepository(new File(arch));
        ServletFileUpload upload = new ServletFileUpload(factory);
        try {
            List<FileItem> partes = upload.parseRequest(request);
            for (FileItem item : partes) {
                File file = new File(arch, item.getName());
                item.write(file);
            }

            request.setAttribute("dato", "Imagen subida con exito");
        } catch (Exception ex) {
            request.setAttribute("dato", ex.getMessage());
        }
        String pagina = "../GoClass/vista/Perfil.jsp";
        response.sendRedirect(pagina); 
        
    }

    protected void subir(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String arch = "C:\\Users\\Josue\\Desktop\\UTP\\Ciclo 6\\Desarrollo web integrado\\GoClass\\web\\Archivos";
        String directorio = "";
        DiskFileItemFactory factory = new DiskFileItemFactory();
        factory.setSizeThreshold(1024);
        factory.setRepository(new File(arch));
        ServletFileUpload upload = new ServletFileUpload(factory);
        try {
            List<FileItem> partes = upload.parseRequest(request);
            for (FileItem item : partes) {
                File file = new File(arch, item.getName());
                item.write(file);
                directorio += file.getPath();
            }

            request.setAttribute("dato", "Imagen subida con exito");
        } catch (Exception ex) {
            request.setAttribute("dato", ex.getMessage());
        }
        out.print(directorio);
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}