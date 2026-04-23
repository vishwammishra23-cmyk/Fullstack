package com.example.jobportal.controller;

import com.example.jobportal.model.Application;
import com.example.jobportal.repository.ApplicationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/applications")
public class ApplicationController {

    private final ApplicationRepository repo;

    public ApplicationController(ApplicationRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Application apply(@RequestBody Application app) {
        return repo.save(app);
    }

    @GetMapping
    public List<Application> getAll() {
        return repo.findAll();
    }
}