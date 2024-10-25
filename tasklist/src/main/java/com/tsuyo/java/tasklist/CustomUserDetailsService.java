package com.tsuyo.java.tasklist;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if ("3333".equals(username)) {
            return org.springframework.security.core.userdetails.User
                    .withUsername("3333")
                    .password("{noop}3333") // {noop}はパスワードのエンコードなしを示す
                    .roles("USER") // 役割を一般的なものに変更
                    .build();
        } else {
            throw new UsernameNotFoundException("User not found");
        }
    }
}
