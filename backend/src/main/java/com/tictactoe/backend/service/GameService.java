package com.tictactoe.backend.service;

import java.util.Random;

public class GameService {

    public String generateRandomLobbyCode() {
        StringBuilder code = new StringBuilder();
        for (int i = 0; i < 6; i++) {
            Random r = new Random();
            char c = (char)(r.nextInt(26) + 'a');
            if (r.nextBoolean()) {
                c = Character.toUpperCase(c);
            }
            code.append(c);
        }

        return code.toString();
    }
}
