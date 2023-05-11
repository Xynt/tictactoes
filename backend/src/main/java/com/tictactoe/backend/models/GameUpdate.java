package com.tictactoe.backend.models;

public class GameUpdate {
    private String content;

    public GameUpdate() {}

    public GameUpdate(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }
}
