package com.thiago.streamingapi.service;
import com.thiago.streamingapi.dto.LoginRequestDTO;
import com.thiago.streamingapi.model.Admin;
import com.thiago.streamingapi.repository.AdminRepository;
import com.thiago.streamingapi.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService
{
    private final AdminRepository adminRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public AdminService(AdminRepository adminRepository,  JwtService jwtService,  PasswordEncoder passwordEncoder)
    {
        this.adminRepository = adminRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    public Admin inserirAdmin(Admin admin)
    {
        admin.setSenha(passwordEncoder.encode(admin.getSenha()));
        return adminRepository.save(admin);
    }

    public String login(LoginRequestDTO loginRequestDTO)
    {
        Optional<Admin> admin = adminRepository.findByEmail(loginRequestDTO.getEmail());

        if (admin.isPresent())
        {
            if (passwordEncoder.matches(loginRequestDTO.getSenha(), admin.get().getSenha()))
            {
                return jwtService.gerarToken(admin.get().getEmail());
            }

        }

        return "Erro ao logar!";
    }

    public void deletarAdmin(Long id)
    {
        if  (adminRepository.existsById(id))
        {
            adminRepository.deleteById(id);
        }
    }
}
