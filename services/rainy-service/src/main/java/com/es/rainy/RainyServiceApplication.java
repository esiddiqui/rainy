package com.es.rainy;

import com.es.rainy.domain.DataItem;
import com.es.rainy.domain.DataItemBuilder;
import com.es.rainy.domain.MetaItem;
import com.es.rainy.repository.DataItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
//	    System.out.println("Finding all");
//	    List<DataItem> items = this.repository.findAll();
//	    items.stream().forEach(
//	            System.out::println
//        );
//        DataItem adp = new DataItemBuilder("reports.adp.ca").category("info")
//                .description("My ADP Canada ")
//                .user("ehteshamsiddiqui")
//                .password("")
//                .hint("Std~pwd~Std~Pin")
//                .meta(new MetaItem("Client Number","29B107"),
//                        new MetaItem("Favourite Color","Blue"),
//                        new MetaItem("Pet's Name","My pet"),
//                        new MetaItem("Nick name","Ehtesham"))
//                .build();
//
//        this.repository.save(adp);
//       System.out.println("Inserting 1 new records");
    }
}
