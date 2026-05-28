package com.thiago.streamingapi.controller;
import com.thiago.streamingapi.dto.LoginRequestDTO;
import com.thiago.streamingapi.model.Admin;
import com.thiago.streamingapi.service.AdminService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdminController
{
    private AdminService adminService;

    public AdminController(AdminService adminService)
    {
        this.adminService = adminService;
    }

    @PostMapping("/admins")
    public Admin inserirAdmin(@Valid @RequestBody Admin admin)
    {
        return adminService.inserirAdmin(admin);
    }

    @PostMapping("/login")
    public String logar(@Valid @RequestBody LoginRequestDTO loginRequestDTO)
    {
        return adminService.login(loginRequestDTO);
    }

    @DeleteMapping("/admins/{id}")
    public void admin(@PathVariable Long id)
    {
        adminService.deletarAdmin(id);
    }

}
