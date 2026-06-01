package com.thiago.streamingapi.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
public class JwtAuthFilter extends OncePerRequestFilter
{
    private final JwtService jwtService;

    public JwtAuthFilter(JwtService jwtService)
    {
        this.jwtService = jwtService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException
    {
        String authHeader = request.getHeader("Authorization");

        // Se o cabeçalho não existir ou não começar com "Bearer ", continua o fluxo sem autenticar
        if (authHeader == null || !authHeader.startsWith("Bearer "))
        {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);

        try
        {
            String email = jwtService.extractUsername(token);

            // Se o e-mail for extraído e não houver nenhuma autenticação ativa no contexto
            if (email != null && SecurityContextHolder.getContext().getAuthentication() == null)
            {
                // Criamos uma autoridade padrão (ROLE_ADMIN) para que o Spring libere os endpoints protegidos
                List<SimpleGrantedAuthority> authorities = List.of(new SimpleGrantedAuthority("ROLE_ADMIN"));

                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(
                                email,
                                null,
                                authorities // Passando as permissões corretas no lugar da lista vazia
                        );

                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        catch (Exception e)
        {
            // Token inválido, malformado ou expirado - o fluxo continua sem autenticação
        }

        filterChain.doFilter(request, response);
    }
}