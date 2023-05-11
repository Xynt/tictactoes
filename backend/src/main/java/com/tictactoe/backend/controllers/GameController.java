package com.tictactoe.backend.controllers;

import com.tictactoe.backend.models.GameMessage;
import com.tictactoe.backend.models.GameUpdate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GameController {

    @MessageMapping("update")
    @SendTo("/topic/gameupdates")
    public GameUpdate update(GameMessage message) {
        return new GameUpdate("Hello BITSCH, " + HtmlUtils.htmlEscape(message.getMessage()) + "!");
    }
}
