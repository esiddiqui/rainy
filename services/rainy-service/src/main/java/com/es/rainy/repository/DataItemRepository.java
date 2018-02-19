package com.es.rainy.repository;

import com.es.rainy.domain.DataItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DataItemRepository extends MongoRepository<DataItem, String> {

    DataItem findById(String id);
    List<DataItem> findAll();
    List<DataItem> findByAnchor(@Param("anchor")String anchor);
    DataItem insert(DataItem item);
    List<DataItem> insert(List<DataItem> items);
}
