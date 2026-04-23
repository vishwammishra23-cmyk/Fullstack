package com.example.jobportal.controller;

import com.example.jobportal.model.Job;
import com.example.jobportal.repository.JobRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/jobs")
public class JobController {

    private final JobRepository repo;

    public JobController(JobRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Job> getAllJobs() {
        return repo.findAll();
    }

    @PostMapping
    public Job addJob(@RequestBody Job job) {
        return repo.save(job);
    }
}