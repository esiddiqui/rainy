package com.es.rainy.domain;

import java.util.HashMap;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection = "data")
public class DataItem {

    @Id
    private String id;

    @Field("cat")
    private String category;
    private String title;
    private String description;
    private String user;
    private String email;

    @Field("pwd")
    private String password;

    @Field("pwdHint")
    private String hint;
    private String anchor;

    private List<MetaItem> meta;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getHint() {
        return hint;
    }

    public void setHint(String hint) {
        this.hint = hint;
    }

    public String getAnchor() {
        return anchor;
    }

    public void setAnchor(String anchor) {
        this.anchor = anchor;
    }

    public List<MetaItem> getMeta() {
        return meta;
    }

    public void setMeta(List<MetaItem> meta) {
        this.meta = meta;
    }

    @Override
    public String toString() {
        return "DataItem{" +
                "id='" + id + '\'' +
                ", category='" + category + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", user='" + user + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", hint='" + hint + '\'' +
                ", anchor='" + anchor + '\'' +
                ", meta=" + meta +
                '}';
    }
}
