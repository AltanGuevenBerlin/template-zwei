package org.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/groceryshop")


public class GroceryController {

    ..service

    @GetMapping()
    public String getGroceryshop() {
        return "Hello World";
    }
}
