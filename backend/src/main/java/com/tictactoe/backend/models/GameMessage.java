package com.tictactoe.backend.models;

public class GameMessage {
    private String message;

    public GameMessage() {}

    public GameMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public GameMessage setMessage(String message) {
        this.message = message;
        return this;
    }
}
