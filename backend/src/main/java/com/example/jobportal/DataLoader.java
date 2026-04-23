package com.example.jobportal;

import com.example.jobportal.model.Job;
import com.example.jobportal.repository.JobRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner loadData(JobRepository repo) {
        return args -> {
            if (repo.count() == 0) {
                repo.deleteAll();
                repo.save(new Job(null, "Frontend Developer", "Google", "Bangalore", "React, JS, UI development"));
                repo.save(new Job(null, "Backend Engineer", "Amazon", "Hyderabad", "Spring Boot, APIs"));
                repo.save(new Job(null, "Data Analyst", "Microsoft", "Pune", "SQL, Python, PowerBI"));
                repo.save(new Job(null, "Full Stack Dev", "StartupX", "Remote", "MERN stack"));
            }
        };
    }
}