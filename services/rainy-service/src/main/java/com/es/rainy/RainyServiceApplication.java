package com.es.rainy;

import com.es.rainy.domain.DataItem;
import com.es.rainy.repository.DataItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.xml.crypto.Data;
import java.util.List;

@SpringBootApplication
public class RainyServiceApplication implements CommandLineRunner {

    @Autowired
    private DataItemRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(RainyServiceApplication.class, args);
	}

	public  void run(String... args) {

	    System.out.println("Finding all");
	    List<DataItem> items = this.repository.findAll();
	    items.stream().forEach(
	            System.out::println
        );

        System.out.println("Finding Amazons");
	    List<DataItem> amazons= this.repository.findByAnchor("amazon.ca");
        amazons.stream().forEach(
                System.out::println
        );
    }
}
